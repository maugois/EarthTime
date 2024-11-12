import User from "../database/schemas/Users.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// Criar usuário
const postUser = async (req, res) => {
    try {
        const { name, user, email, password, permission } = req.body;
        
        const userAlreadyExists = await User.findOne({ user });
        
        if (userAlreadyExists) {
          return res.status(400).json({ message: "User already exists" });
        }
        
        const hashedPassword = await bcrypt.hash(password, 10);
        
        const newUser = new User({
          name,
          user,
          email,
          password: hashedPassword,
          permission
        });
    
        const savedUser = await newUser.save();
    
        res.status(201).json("savedUser");
    } catch (error) {
        res.status(500).json({ message: error.message || "Error on create a new user" });
    }
};

// Buscar tudo
const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        
        res.status(201).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message || "Error on search users" });
    }
}

// Buscar um
const getOneUser = async (req, res) => {
    try {
        // Obtém o id do parâmetro da URL
        const { id } = req.params;

        // Busca o usuário pelo ID
        const userOne = await User.findById(id);

        if (!userOne) {
            // Se o usuário não for encontrado
            return res.status(404).json({ message: "User not found" });
        }

        // Retorna o usuário encontrado
        res.status(200).json(userOne);
    } catch (error) {
        // Retorna erro em caso de falha na consulta
        res.status(500).json({ message: error.message || "Error on search a specific user" });
    }
}

// Atualizar
const updateUser = async (req, res) => {
    try {
        // Inicializa um objeto para armazenar as atualizações
        const updates = {};

        // Verifica se o campo 'name' foi enviado e adiciona ao objeto de atualizações
        if (req.body.name) {
            updates.name = req.body.name;
        }

        // Verifica se o campo 'user' foi enviado e adiciona ao objeto de atualizações
        if (req.body.user) {
            updates.user = req.body.user;
        }

        // Verifica se o campo 'email' foi enviado e adiciona ao objeto de atualizações
        if (req.body.email) {
            updates.email = req.body.email;
        }

        // Verifica se o campo 'password' foi enviado e adiciona ao objeto de atualizações
        if (req.body.password) {
            updates.password = req.body.password;
        }

        // Verifica se o campo 'password' foi enviado e adiciona ao objeto de atualizações
        if (req.body.permission) {
            updates.permission = req.body.permission;
        }

        // Atualiza o usuário no banco de dados com os campos que foram enviados
        const user = await User.findByIdAndUpdate(req.params.id, updates, { new: true });

        // Caso o usuário não seja encontrado, retorna um erro 404
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // Retorna o usuário atualizado
        res.json(user);
    } catch (error) {
        // Caso ocorra um erro, retorna o erro com uma mensagem
        res.status(500).json({ message: error.message || "Error updating user" });
    }
}

// Deletar
const deleteUser = async (req, res) => {
    try {
        // Tenta encontrar e deletar o usuário pelo ID
        const user = await User.findByIdAndDelete(req.params.id);

        // Verifica se o usuário foi encontrado e deletado
        if (!user) {
            // Se o usuário não for encontrado, retorna um erro 404
            return res.status(404).json({ message: "User not found" });
        }

        // Se o usuário for deletado, retorna uma confirmação
        res.status(200).json({ message: "User deleted successfully", user });
    } catch (error) {
        // Se ocorrer um erro durante o processo, retorna uma mensagem de erro
        res.status(500).json({ message: error.message || "Error deleting user" });
    }
}

// Logout
const logoutUser = async (req, res) => {
    // Apenas retorne uma resposta de sucesso
    res.status(200).json({ message: "Logout successful" });
}

// Autenticar usuário para o login
const authUser = async (req, res) => {
    const { user, email, password } = req.body;

    const userAlreadyExists = await User.findOne({ user }) || await User.findOne({ email });

    if (!userAlreadyExists) {
        return res.status(400).json({ message: "User already not exists" });
    }

    const isPasswordCorrect = await bcrypt.compare(password, userAlreadyExists.password);

    if (!isPasswordCorrect) {
        return res.status(400).json({ message: "Invalid password" });
    }
    
    const token = jwt.sign({ id: userAlreadyExists._id }, process.env.JWT_SECRET);
    return res.status(200).json({ token });
};


export default { postUser, authUser, getUsers, getOneUser, updateUser, deleteUser, logoutUser };