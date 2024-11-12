import React from "react";
import { useState, useEffect } from "react";
import Admin from "../../../layouts/Admin.jsx";
import CardAdmin from "../../../components/CardAdmin/CardAdmin.jsx";
import DataTable from "../../../components/DataTable/DataTable.jsx";
import Modal from "../../../components/Modal/Modal.jsx";
import InputGeneral from "../../../components/InputGeneral/InputGeneral.jsx";
import InputSelect from "../../../components/InputSelect/InputSelect.jsx";
import MessageBox from "../../../components/MessageBox/MessageBox.jsx";
import fetchUser from "../../../services/api/User/getUser.jsx";
import { useCreateUser } from '../../../services/api/User/createUser';
import { useDeleteUser } from '../../../services/api/User/deleteUser';
import { useUpdateUser } from '../../../services/api/User/updateUser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileSignature, faUser, faEnvelope, faLock, faList, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import "./UserAdmin.css";

export default function UserAdmin() {
    const [selectedUser, setSelectedUser] = useState({});
    const [updateData, setUpdateData] = useState({ name: '', user: '', email: '', password: '', permission: '1' });
    const [newUser, setNewUser] = useState({ name: '', user: '', email: '', password: '', permission: '1' });
    const [selectedField, setSelectedField] = useState('');
    const [messageBox, setMessageBox] = useState({ show: true, message: 'danger', bgColor: '' });
    const { users } = fetchUser();
    const { createUser, errorCreate } = useCreateUser();
    const { deleteUser, errorDelete } = useDeleteUser();
    const { updateUser, errorUpdate } = useUpdateUser();

    const clenInput = () => {
        setNewUser({ name: '', user: '', email: '', password: '', permission: '1' });
        setUpdateData({ name: '', user: '', email: '', password: '', permission: '1' });
    };

    const handleCreateUser = async () => {
        await createUser(newUser);

        if (!errorCreate) {
            window.location.reload();
            setMessageBox({ show: true, message: 'Usuário criado com sucesso!', bgColor: 'success' });
        } else {
            setMessageBox({ show: true, message: 'Erro ao criar usuário', bgColor: 'danger' });
        }

        clenInput();
    };

    const handleUpdateUser = async (userId) => {
        await updateUser(userId, updateData);
        
        if (!errorUpdate) {
            window.location.reload();
            setMessageBox({ show: true, message: 'Usuário atualizado com sucesso!', bgColor: 'success' });
        } else {
            setMessageBox({ show: true, message: 'Erro ao atualizar usuário', bgColor: 'danger' });
        }

        clenInput();
    };

    const handleDeleteUser = async (userId) => {
        await deleteUser(userId);

        if (!errorDelete) {
            window.location.reload();
            setMessageBox({ show: true, message: 'Usuário deletado com sucesso!', bgColor: 'success' });
        } else {
            setMessageBox({ show: true, message: 'Erro ao deletar usuário', bgColor: 'danger' });
        }
    };

    const handleOpenModal = (user) => {
        setSelectedUser(user);
    };

    const columns = [
        {
            name: 'ID',
            selector: row => row.id,
            sortable: true,
            width: '100px'
        },
        {
            name: 'Nome',
            selector: row => row.name,
            sortable: true,
        },
        {
            name: 'Usuário',
            selector: row => row.user,
            sortable: true,
        },
        {
            name: 'E-mail',
            selector: row => row.email,
            sortable: true,
            width: '200px'
        },
        {
            name: 'Permissão',
            selector: row => row.permission,
            sortable: true,
            width: '200px'
        },
        {
            name: 'Opções',
            selector: row => row.button,
            width: '300px'
        }
    ];

    const dataTable = users.map((user, index) => ({
        id: index + 1,
        name: user.name,
        user: user.user,
        email: user.email,
        permission: user.permission === "1" ? "Administrador" : 'Colaborador',
        button: (
            <div className="d-flex gap-3 justify-content-center">
                <button
                    className="btn btn-warning"
                    data-bs-toggle="modal"
                    data-bs-target="#modalUserUpdate"
                    onClick={() => handleOpenModal(user)}
                >
                    Alterar
                </button>

                <button
                    className="btn btn-danger"
                    data-bs-toggle="modal"
                    data-bs-target="#modalUserDelete"
                    onClick={() => handleOpenModal(user)}
                >
                    Excluir
                </button>
            </div>
        ),
    }));

    return (
        <>
            <Admin>
                <div className="sectionAdminSolicitation">
                    <h1 className="text-uppercase ms-5 mb-5 text-white">Usuários</h1>
                    <div className="d-flex flex-wrap justify-content-start mx-5 gap-5 mb-5 text-white">
                        <CardAdmin title="Total de solicitações">
                            <div className="fs-1 fw-semibold text-center py-3">{users.length}</div>
                        </CardAdmin>
                    </div>

                    <div className="table-responsive mx-5 p-4 bg-body rounded shadow-lg">
                        <button
                            className="btn btn-success"
                            data-bs-toggle="modal"
                            data-bs-target="#modalUserCreate"
                            onClick={() => handleOpenModal(user)}>
                            Adicionar
                        </button>

                        <DataTable idTable="tableUser" columns={columns} dataTable={dataTable} />
                    </div>
                </div>

                <Modal idModal="modalUserCreate" titleModal="Solicitação" 
                    Buttons={
                        <>
                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={clenInput}>Fechar</button>
                            <button 
                                type="button" 
                                className="btn btn-success" 
                                data-bs-dismiss="modal" 
                                onClick={handleCreateUser} 
                                disabled={!newUser.name || !newUser.user || !newUser.email || !newUser.password || !newUser.permission} >Adicionar</button>
                        </>
                    }
                > 
                    <div className='row text-white m-auto'>
                        <div className='col-12'>
                            <form>
                                <InputGeneral 
                                    typeInput='text' 
                                    idInput='nameUserCreate' 
                                    iconLabel={ <FontAwesomeIcon icon={faFileSignature} /> } 
                                    placeholder='Nome' 
                                    isRequired='required' 
                                    value={newUser.name}
                                    onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
                                />
                                <InputGeneral 
                                    typeInput='text' 
                                    idInput='userCreate' 
                                    iconLabel={ <FontAwesomeIcon icon={faUser} /> } 
                                    placeholder='Usuário' 
                                    isRequired='required'
                                    value={newUser.user} 
                                    onChange={(e) => setNewUser({ ...newUser, user: e.target.value })} 
                                />
                                <InputGeneral 
                                    typeInput='email' 
                                    idInput='emailUserCreate' 
                                    iconLabel={ <FontAwesomeIcon icon={faEnvelope} /> } 
                                    placeholder='E-mail' 
                                    isRequired='required'
                                    value={newUser.email} 
                                    onChange={(e) => setNewUser({ ...newUser, email: e.target.value })} 
                                />
                                <InputGeneral 
                                    typeInput='password' 
                                    idInput='passwordUserCreate' 
                                    iconLabel={ <FontAwesomeIcon icon={faLock} /> } 
                                    placeholder='Senha' 
                                    isRequired='required' 
                                    value={newUser.password} 
                                    onChange={(e) => setNewUser({ ...newUser, password: e.target.value })} 
                                />
                                <InputSelect
                                    idSelect="permissionUserCreate"
                                    iconLabel={<FontAwesomeIcon icon={faList} />}
                                    placeholder="Informe o nível de permissão do usuário"
                                    isRequired="required"
                                    value={newUser.permission}
                                    onChange={(e) => setNewUser({ ...newUser, permission: e.target.value })}
                                >
                                    <option value="1">Administrador</option>
                                    <option value="0">Colaborador</option>
                                </InputSelect>
                            </form>
                        </div>
                    </div>
                </Modal>

                <Modal idModal="modalUserUpdate" titleModal="Solicitação" 
                    Buttons={
                        <>
                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={clenInput}>Fechar</button>
                        </>
                    }
                > 
                    <div className='row text-white m-auto'>
                        <div className='col-12'>
                            <ul className="list-group list-group-flush listGroupCustom rounded w-100">
                                <li className="list-group-item d-flex justify-content-between">
                                    Nome: {selectedUser.name} 
                                    <button onClick={() => setSelectedField('name')} type="button" className="btn btn-warning" data-bs-toggle="modal" data-bs-target="#modalUserUpdateForm"> <FontAwesomeIcon icon={faPenToSquare} /></button>
                                </li>
                                <li className="list-group-item d-flex justify-content-between">
                                    Usuário: {selectedUser.user} 
                                    <button onClick={() => setSelectedField('user')} className="btn btn-warning" data-bs-toggle="modal" data-bs-target="#modalUserUpdateForm"> <FontAwesomeIcon icon={faPenToSquare} /></button>
                                </li>
                                <li className="list-group-item d-flex justify-content-between">
                                    E-mail: {selectedUser.email} 
                                    <button onClick={() => setSelectedField('email')} className="btn btn-warning" data-bs-toggle="modal" data-bs-target="#modalUserUpdateForm"> <FontAwesomeIcon icon={faPenToSquare} /></button>
                                </li>
                                <li className="list-group-item d-flex justify-content-between">
                                    Senha: **********
                                    <button onClick={() => setSelectedField('password')} className="btn btn-warning" data-bs-toggle="modal" data-bs-target="#modalUserUpdateForm"> <FontAwesomeIcon icon={faPenToSquare} /></button>
                                </li>
                                <li className="list-group-item d-flex justify-content-between">
                                    Permissão: {selectedUser.permission === '1' ? 'Administrador' : 'Colaborador'} 
                                    <button onClick={() => setSelectedField('permission')} className="btn btn-warning" data-bs-toggle="modal" data-bs-target="#modalUserUpdateForm"> <FontAwesomeIcon icon={faPenToSquare} /></button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </Modal>

                <Modal idModal="modalUserUpdateForm" titleModal="Solicitação" 
                    Buttons={
                        <>
                            <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#modalUserUpdate">Voltar</button>
                            <button 
                                type="button" 
                                className="btn btn-success" 
                                data-bs-dismiss="modal" 
                                onClick={() => handleUpdateUser(selectedUser._id)}
                                disabled={
                                    selectedField === 'name' && !updateData.name ||
                                    selectedField === 'user' && !updateData.user ||
                                    selectedField === 'email' && !updateData.email ||
                                    selectedField === 'password' && !updateData.password ||
                                    selectedField === 'permission' && !updateData.permission
                                }
                                >Alterar</button>
                        </>
                    }
                > 
                    <div className='row text-white m-auto'>
                    <div className='col-12'>
                            <form>
                                {selectedField === 'name' && 
                                    <InputGeneral 
                                        typeInput='text' 
                                        idInput='nameUserUpdate' 
                                        iconLabel={ <FontAwesomeIcon icon={faFileSignature} /> } 
                                        placeholder='Nome' 
                                        isRequired='required'
                                        value={updateData.name}
                                        onChange={(e) => setUpdateData({ ...updateData, name: e.target.value })} 
                                    />}

                                {selectedField === 'user' && 
                                    <InputGeneral 
                                        typeInput='text' 
                                        idInput='userUpdate' 
                                        iconLabel={ <FontAwesomeIcon icon={faUser} /> } 
                                        placeholder='Usuário' 
                                        isRequired='required'
                                        value={updateData.user}
                                        onChange={(e) => setUpdateData({ ...updateData, user: e.target.value })} 
                                    />}

                                {selectedField === 'email' && 
                                    <InputGeneral 
                                        typeInput='email' 
                                        idInput='emailUserUpdate' 
                                        iconLabel={ <FontAwesomeIcon icon={faEnvelope} /> } 
                                        placeholder='E-mail' 
                                        isRequired='required'
                                        value={updateData.email}
                                        onChange={(e) => setUpdateData({ ...updateData, email: e.target.value })}  
                                    />}
                                
                                {selectedField === 'password' && 
                                    <InputGeneral 
                                        typeInput='password' 
                                        idInput='passwordUserUpdate' 
                                        iconLabel={ <FontAwesomeIcon icon={faLock} /> } 
                                        placeholder='Senha' 
                                        isRequired='required'
                                        value={updateData.password}
                                        onChange={(e) => setUpdateData({ ...updateData, password: e.target.value })}  
                                    />}
                                
                                {selectedField === 'permission' && 
                                    <InputSelect 
                                        idSelect='permissionUserUpdate' 
                                        iconLabel={ <FontAwesomeIcon icon={faList} /> } 
                                        placeholder='Informa o nível de permissão do usuário' 
                                        isRequired='required' 
                                        valueOne='1' 
                                        valueTwo='0' 
                                        optionOne='Administrador' 
                                        optionTwo='Colaborador'
                                        value={updateData.permission}
                                        onChange={(e) => setUpdateData({ ...updateData, permission: e.target.value })} 
                                    >
                                        <option value="1">Administrador</option>
                                        <option value="0">Colaborador</option>
                                    </InputSelect>}
                            </form>
                        </div>
                    </div>
                </Modal>

                <Modal idModal="modalUserDelete" titleModal="Solicitação" 
                    Buttons={
                        <>
                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Fechar</button>
                            <button type="button" className="btn btn-success" data-bs-dismiss="modal" onClick={() => handleDeleteUser(selectedUser._id)}>Excluir</button>
                        </>
                    }
                > 
                    <p className="text-center text-white fs-5 pt-5 pb-4">Realmente deseja excluir o usuário?</p>
                </Modal>
                
                {messageBox.show && (
                    <MessageBox
                        bgColor={messageBox.bgColor}
                        message={messageBox.message}
                    />
                )}
            </Admin>
        
        </>
    );
}