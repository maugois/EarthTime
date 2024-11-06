import { useState, useEffect } from 'react';
import image from '../../assets/images/companies.jfif';
import image2 from '../../assets/images/companies2.jfif';
import image3 from '../../assets/images/companies3.jfif';

export const useCompanies = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulação de requisição assíncrona
    const fetchCompanies = async () => {
      try {
        setLoading(true);
        
        const companyData = [
              {
                id: "1",  
                title: "GreenWear",
                email: "email@email.com",
                phone: "(11) 99999-9999",
                cnpj: "82.164.443/0001-82",
                cep: "13565-040",
                status: "Pendente",
                solicitation: "0",
                reason: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus maiores optio, placeat, possimus magni iure blanditiis obcaecati excepturi praesentium eum suscipit corrupti officia! Facere possimus ipsam animi neque molestiae porro?",
                branch: "Vestuário Sustentável",
                imageUrl: image,
                imageAlt: "Imagem da GreenWear",
                urlCompany: "https://www.greenwear.com.br/",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat volutpat. Donec tincidunt, ipsum a ultrices ultrices, tellus dui varius nunc, at lacinia lacus neque at sem. Donec laoreet, nisl nec varius aliquam, nisl nisl aliquam nisl, nec aliquam nisl nisl nec nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat volutpat. Donec tincidunt, ipsum a ultrices ultrices, tellus dui varius nunc, at lacinia lacus neque at sem. Donec laoreet, nisl nec varius aliquam, nisl nisl aliquam nisl, nec aliquam nisl nisl nec nisl."
              },
              {
                id: "2",
                title: "EcoTech",
                email: "email@email.com",
                phone: "(11) 99999-9999",
                cnpj: "41.070.223/0001-02",
                cep: "13073-400",
                status: "Aceito",
                solicitation: "Encerrar",
                reason: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus maiores optio, placeat, possimus magni iure blanditiis obcaecati excepturi praesentium eum suscipit corrupti officia! Facere possimus ipsam animi neque molestiae porro?",
                branch: "Tecnologia Ecológica",
                imageUrl: image2,
                imageAlt: "Imagem da EcoTech",
                urlCompany: "https://www.ecotech.com.br/",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat volutpat. Donec tincidunt, ipsum a ultrices ultrices, tellus dui varius nunc, at lacinia lacus neque at sem. Donec laoreet, nisl nec varius aliquam, nisl nisl aliquam nisl, nec aliquam nisl nisl nec nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat volutpat. Donec tincidunt, ipsum a ultrices ultrices, tellus dui varius nunc, at lacinia lacus neque at sem. Donec laoreet, nisl nec varius aliquam, nisl nisl aliquam nisl, nec aliquam nisl nisl nec nisl."
              },
              {
                id: "3",
                title: "SolarSolutions",
                email: "email@email.com",
                phone: "(11) 99999-9999",
                cnpj: "61.269.577/0001-98",
                cep: "16403-111",
                status: "Recusado",
                solicitation: "0",
                reason: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus maiores optio, placeat, possimus magni iure blanditiis obcaecati excepturi praesentium eum suscipit corrupti officia! Facere possimus ipsam animi neque molestiae porro?",
                branch: "Energia Solar",
                imageUrl: image3,
                imageAlt: "Imagem da SolarSolutions",
                urlCompany: "https://www.solarsolutions.com.br/",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat volutpat. Donec tincidunt, ipsum a ultrices ultrices, tellus dui varius nunc, at lacinia lacus neque at sem. Donec laoreet, nisl nec varius aliquam, nisl nisl aliquam nisl, nec aliquam nisl nisl nec nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat volutpat. Donec tincidunt, ipsum a ultrices ultrices, tellus dui varius nunc, at lacinia lacus neque at sem. Donec laoreet, nisl nec varius aliquam, nisl nisl aliquam nisl, nec aliquam nisl nisl nec nisl."
              },
              {
                id: "4",
                title: "BioPack",
                email: "email@email.com",
                phone: "(11) 99999-9999",
                cnpj: "41.915.558/0001-84",
                cep: "13067-816",
                status: "Pendente",
                solicitation: "0",
                reason: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus maiores optio, placeat, possimus magni iure blanditiis obcaecati excepturi praesentium eum suscipit corrupti officia! Facere possimus ipsam animi neque molestiae porro?",
                branch: "Embalagens Biodegradáveis",
                imageUrl: image,
                imageAlt: "Imagem da BioPack",
                urlCompany: "https://www.biopack.com.br/",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat volutpat. Donec tincidunt, ipsum a ultrices ultrices, tellus dui varius nunc, at lacinia lacus neque at sem. Donec laoreet, nisl nec varius aliquam, nisl nisl aliquam nisl, nec aliquam nisl nisl nec nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat volutpat. Donec tincidunt, ipsum a ultrices ultrices, tellus dui varius nunc, at lacinia lacus neque at sem. Donec laoreet, nisl nec varius aliquam, nisl nisl aliquam nisl, nec aliquam nisl nisl nec nisl."
              },
              {
                id: "5",
                title: "PureWater",
                email: "email@email.com",
                phone: "(11) 99999-9999",
                cnpj: "71.216.940/0001-60",
                cep: "04856-320",
                status: "Aceito",
                solicitation: "Alterar",
                reason: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus maiores optio, placeat, possimus magni iure blanditiis obcaecati excepturi praesentium eum suscipit corrupti officia! Facere possimus ipsam animi neque molestiae porro?",
                branch: "Tratamento de Água",
                imageUrl: image2,
                imageAlt: "Imagem da PureWater",
                urlCompany: "https://www.purewater.com.br/",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat volutpat. Donec tincidunt, ipsum a ultrices ultrices, tellus dui varius nunc, at lacinia lacus neque at sem. Donec laoreet, nisl nec varius aliquam, nisl nisl aliquam nisl, nec aliquam nisl nisl nec nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat volutpat. Donec tincidunt, ipsum a ultrices ultrices, tellus dui varius nunc, at lacinia lacus neque at sem. Donec laoreet, nisl nec varius aliquam, nisl nisl aliquam nisl, nec aliquam nisl nisl nec nisl."
              },
              {
                id: "6",
                title: "UrbanFarm",
                email: "email@email.com",
                phone: "(11) 99999-9999",
                cnpj: "61.808.737/0001-20",
                cep: "02372-130",
                status: "Recusado",
                solicitation: "0",
                reason: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus maiores optio, placeat, possimus magni iure blanditiis obcaecati excepturi praesentium eum suscipit corrupti officia! Facere possimus ipsam animi neque molestiae porro?",
                branch: "Agricultura Urbana",
                imageUrl: image3,
                imageAlt: "Imagem da UrbanFarm",
                urlCompany: "https://www.urbanfarm.com.br/",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat volutpat. Donec tincidunt, ipsum a ultrices ultrices, tellus dui varius nunc, at lacinia lacus neque at sem. Donec laoreet, nisl nec varius aliquam, nisl nisl aliquam nisl, nec aliquam nisl nisl nec nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat volutpat. Donec tincidunt, ipsum a ultrices ultrices, tellus dui varius nunc, at lacinia lacus neque at sem. Donec laoreet, nisl nec varius aliquam, nisl nisl aliquam nisl, nec aliquam nisl nisl nec nisl."
              },
              {
                id: "7",
                title: "EcoTrans",
                email: "email@email.com",
                phone: "(11) 99999-9999",
                cnpj: "43.734.421/0001-59",
                cep: "13188-000",
                status: "Pendente",
                solicitation: "0",
                reason: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus maiores optio, placeat, possimus magni iure blanditiis obcaecati excepturi praesentium eum suscipit corrupti officia! Facere possimus ipsam animi neque molestiae porro?",
                branch: "Transportes Verdes",
                imageUrl: image,
                imageAlt: "Imagem da EcoTrans",
                urlCompany: "https://www.ecotrans.com.br/",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat volutpat. Donec tincidunt, ipsum a ultrices ultrices, tellus dui varius nunc, at lacinia lacus neque at sem. Donec laoreet, nisl nec varius aliquam, nisl nisl aliquam nisl, nec aliquam nisl nisl nec nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat volutpat. Donec tincidunt, ipsum a ultrices ultrices, tellus dui varius nunc, at lacinia lacus neque at sem. Donec laoreet, nisl nec varius aliquam, nisl nisl aliquam nisl, nec aliquam nisl nisl nec nisl."
              },
              {
                id: "8",
                title: "BioEnergy",
                email: "email@email.com",
                phone: "(11) 99999-9999",
                cnpj: "69.886.616/0001-08",
                cep: "13355-970",
                status: "Aceito",
                solicitation: "0",
                reason: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus maiores optio, placeat, possimus magni iure blanditiis obcaecati excepturi praesentium eum suscipit corrupti officia! Facere possimus ipsam animi neque molestiae porro?",
                branch: "Biocombustíveis",
                imageUrl: image2,
                imageAlt: "Imagem da BioEnergy",
                urlCompany: "https://www.bioenergy.com.br/",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat volutpat. Donec tincidunt, ipsum a ultrices ultrices, tellus dui varius nunc, at lacinia lacus neque at sem. Donec laoreet, nisl nec varius aliquam, nisl nisl aliquam nisl, nec aliquam nisl nisl nec nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat volutpat. Donec tincidunt, ipsum a ultrices ultrices, tellus dui varius nunc, at lacinia lacus neque at sem. Donec laoreet, nisl nec varius aliquam, nisl nisl aliquam nisl, nec aliquam nisl nisl nec nisl."
              },
              {
                id: "9",
                title: "SmartRecycle",
                email: "email@email.com",
                phone: "(11) 99999-9999",
                cnpj: "50.144.723/0001-32",
                cep: "04837-150",
                status: "Recusado",
                solicitation: "0",
                reason: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus maiores optio, placeat, possimus magni iure blanditiis obcaecati excepturi praesentium eum suscipit corrupti officia! Facere possimus ipsam animi neque molestiae porro?",
                branch: "Reciclagem Inteligente",
                imageUrl: image3,
                imageAlt: "Imagem da SmartRecycle",
                urlCompany: "https://www.smartrecycle.com.br/",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat volutpat. Donec tincidunt, ipsum a ultrices ultrices, tellus dui varius nunc, at lacinia lacus neque at sem. Donec laoreet, nisl nec varius aliquam, nisl nisl aliquam nisl, nec aliquam nisl nisl nec nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat volutpat. Donec tincidunt, ipsum a ultrices ultrices, tellus dui varius nunc, at lacinia lacus neque at sem. Donec laoreet, nisl nec varius aliquam, nisl nisl aliquam nisl, nec aliquam nisl nisl nec nisl."
              },
              {
                id: "10",
                title: "GreenBuilding",
                email: "email@email.com",
                phone: "(11) 99999-9999",
                cnpj: "56.654.355/0001-59",
                cep: "13900-460",
                status: "Pendente",
                solicitation: "0",
                reason: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus maiores optio, placeat, possimus magni iure blanditiis obcaecati excepturi praesentium eum suscipit corrupti officia! Facere possimus ipsam animi neque molestiae porro?",
                branch: "Construção Sustentável",
                imageUrl: image,
                imageAlt: "Imagem da GreenBuilding",
                urlCompany: "https://www.greenbuilding.com.br/",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat volutpat. Donec tincidunt, ipsum a ultrices ultrices, tellus dui varius nunc, at lacinia lacus neque at sem. Donec laoreet, nisl nec varius aliquam, nisl nisl aliquam nisl, nec aliquam nisl nisl nec nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat volutpat. Donec tincidunt, ipsum a ultrices ultrices, tellus dui varius nunc, at lacinia lacus neque at sem. Donec laoreet, nisl nec varius aliquam, nisl nisl aliquam nisl, nec aliquam nisl nisl nec nisl."
              },
              {
                id: "11",
                title: "ZeroWaste",
                email: "email@email.com",
                phone: "(11) 99999-9999",
                cnpj: "88.463.986/0001-87",
                cep: "05883-110",
                status: "Aceito",
                solicitation: "Encerrar",
                reason: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus maiores optio, placeat, possimus magni iure blanditiis obcaecati excepturi praesentium eum suscipit corrupti officia! Facere possimus ipsam animi neque molestiae porro?",
                branch: "Desperdício Zero",
                imageUrl: image2,
                imageAlt: "Imagem da ZeroWaste",
                urlCompany: "https://www.zerowaste.com.br/",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat volutpat. Donec tincidunt, ipsum a ultrices ultrices, tellus dui varius nunc, at lacinia lacus neque at sem. Donec laoreet, nisl nec varius aliquam, nisl nisl aliquam nisl, nec aliquam nisl nisl nec nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat volutpat. Donec tincidunt, ipsum a ultrices ultrices, tellus dui varius nunc, at lacinia lacus neque at sem. Donec laoreet, nisl nec varius aliquam, nisl nisl aliquam nisl, nec aliquam nisl nisl nec nisl."
              },
              {
                id: "12",
                title: "EarthCare",
                email: "email@email.com",
                phone: "(11) 99999-9999",
                cnpj: "61.620.241/0001-28",
                cep: "17020-650",
                status: "Recusado",
                solicitation: "0",
                reason: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus maiores optio, placeat, possimus magni iure blanditiis obcaecati excepturi praesentium eum suscipit corrupti officia! Facere possimus ipsam animi neque molestiae porro?",
                branch: "Consultoria Ambiental",
                imageUrl: image3,
                imageAlt: "Imagem da EarthCare",
                urlCompany: "https://www.earthcare.com.br/",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat volutpat. Donec tincidunt, ipsum a ultrices ultrices, tellus dui varius nunc, at lacinia lacus neque at sem. Donec laoreet, nisl nec varius aliquam, nisl nisl aliquam nisl, nec aliquam nisl nisl nec nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat volutpat. Donec tincidunt, ipsum a ultrices ultrices, tellus dui varius nunc, at lacinia lacus neque at sem. Donec laoreet, nisl nec varius aliquam, nisl nisl aliquam nisl, nec aliquam nisl nisl nec nisl."
              },
              {
                id: "13",
                title: "GreenFinance",
                email: "email@email.com",
                phone: "(11) 99999-9999",
                cnpj: "39.873.158/0001-01",
                cep: "03275-005",
                status: "Pendente",
                solicitation: "0",
                reason: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus maiores optio, placeat, possimus magni iure blanditiis obcaecati excepturi praesentium eum suscipit corrupti officia! Facere possimus ipsam animi neque molestiae porro?",
                branch: "Finanças Sustentáveis",
                imageUrl: image,
                imageAlt: "Imagem da GreenFinance",
                urlCompany: "https://www.greenfinance.com.br/",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat volutpat. Donec tincidunt, ipsum a ultrices ultrices, tellus dui varius nunc, at lacinia lacus neque at sem. Donec laoreet, nisl nec varius aliquam, nisl nisl aliquam nisl, nec aliquam nisl nisl nec nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat volutpat. Donec tincidunt, ipsum a ultrices ultrices, tellus dui varius nunc, at lacinia lacus neque at sem. Donec laoreet, nisl nec varius aliquam, nisl nisl aliquam nisl, nec aliquam nisl nisl nec nisl."
              },
              {
                id: "14",
                title: "OceanClean",
                email: "email@email.com",
                phone: "(11) 99999-9999",
                cnpj: "70.278.636/0001-85",
                cep: "08557-670",
                status: "Aceito",
                solicitation: "0",
                reason: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus maiores optio, placeat, possimus magni iure blanditiis obcaecati excepturi praesentium eum suscipit corrupti officia! Facere possimus ipsam animi neque molestiae porro?",
                branch: "Limpeza dos Oceanos",
                imageUrl: image2,
                imageAlt: "Imagem da OceanClean",
                urlCompany: "https://www.oceanclean.com.br/",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat volutpat. Donec tincidunt, ipsum a ultrices ultrices, tellus dui varius nunc, at lacinia lacus neque at sem. Donec laoreet, nisl nec varius aliquam, nisl nisl aliquam nisl, nec aliquam nisl nisl nec nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat volutpat. Donec tincidunt, ipsum a ultrices ultrices, tellus dui varius nunc, at lacinia lacus neque at sem. Donec laoreet, nisl nec varius aliquam, nisl nisl aliquam nisl, nec aliquam nisl nisl nec nisl."
              },
              {
                id: "15",
                title: "GreenCuisine",
                email: "email@email.com",
                phone: "(11) 99999-9999",
                cnpj: "17.854.856/0001-27",
                cep: "17519-150",
                status: "Recusado",
                solicitation: "0",
                reason: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus maiores optio, placeat, possimus magni iure blanditiis obcaecati excepturi praesentium eum suscipit corrupti officia! Facere possimus ipsam animi neque molestiae porro?",
                branch: "Alimentação Saudável",
                imageUrl: image3,
                imageAlt: "Imagem da GreenCuisine",
                urlCompany: "https://www.greencuisine.com.br/",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat volutpat. Donec tincidunt, ipsum a ultrices ultrices, tellus dui varius nunc, at lacinia lacus neque at sem. Donec laoreet, nisl nec varius aliquam, nisl nisl aliquam nisl, nec aliquam nisl nisl nec nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat volutpat. Donec tincidunt, ipsum a ultrices ultrices, tellus dui varius nunc, at lacinia lacus neque at sem. Donec laoreet, nisl nec varius aliquam, nisl nisl aliquam nisl, nec aliquam nisl nisl nec nisl."
              },
              {
                id: "16",
                title: "EcoHouse",
                email: "email@email.com",
                phone: "(11) 99999-9999",
                cnpj: "13504-111",
                cep: "08062-150",
                status: "Pendente",
                solicitation: "0",
                reason: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus maiores optio, placeat, possimus magni iure blanditiis obcaecati excepturi praesentium eum suscipit corrupti officia! Facere possimus ipsam animi neque molestiae porro?",
                branch: "Design de Interiores Sustentável",
                imageUrl: image,
                imageAlt: "Imagem da EcoHouse",
                urlCompany: "https://www.ecohouse.com.br/",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat volutpat. Donec tincidunt, ipsum a ultrices ultrices, tellus dui varius nunc, at lacinia lacus neque at sem. Donec laoreet, nisl nec varius aliquam, nisl nisl aliquam nisl, nec aliquam nisl nisl nec nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat volutpat. Donec tincidunt, ipsum a ultrices ultrices, tellus dui varius nunc, at lacinia lacus neque at sem. Donec laoreet, nisl nec varius aliquam, nisl nisl aliquam nisl, nec aliquam nisl nisl nec nisl."
              },
              {
                id: "17",
                title: "CleanAir",
                email: "email@email.com",
                phone: "(11) 99999-9999",
                cnpj: "86.377.145/0001-21",
                cep: "06690-570",
                status: "Aceito",
                solicitation: "Alterar",
                reason: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus maiores optio, placeat, possimus magni iure blanditiis obcaecati excepturi praesentium eum suscipit corrupti officia! Facere possimus ipsam animi neque molestiae porro?",
                branch: "Qualidade do Ar",
                imageUrl: image2,
                imageAlt: "Imagem da CleanAir",
                urlCompany: "https://www.cleanair.com.br/",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat volutpat. Donec tincidunt, ipsum a ultrices ultrices, tellus dui varius nunc, at lacinia lacus neque at sem. Donec laoreet, nisl nec varius aliquam, nisl nisl aliquam nisl, nec aliquam nisl nisl nec nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat volutpat. Donec tincidunt, ipsum a ultrices ultrices, tellus dui varius nunc, at lacinia lacus neque at sem. Donec laoreet, nisl nec varius aliquam, nisl nisl aliquam nisl, nec aliquam nisl nisl nec nisl."
              },
              {
                id: "18",
                title: "TreeLife",
                email: "email@email.com",
                phone: "(11) 99999-9999",
                cnpj: "65.475.956/0001-95",
                cep: "13068-607",
                status: "Recusado",
                solicitation: "0",
                reason: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus maiores optio, placeat, possimus magni iure blanditiis obcaecati excepturi praesentium eum suscipit corrupti officia! Facere possimus ipsam animi neque molestiae porro?",
                branch: "Reflorestamento",
                imageUrl: image3,
                imageAlt: "Imagem da TreeLife",
                urlCompany: "https://www.treelife.com.br/",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat volutpat. Donec tincidunt, ipsum a ultrices ultrices, tellus dui varius nunc, at lacinia lacus neque at sem. Donec laoreet, nisl nec varius aliquam, nisl nisl aliquam nisl, nec aliquam nisl nisl nec nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat volutpat. Donec tincidunt, ipsum a ultrices ultrices, tellus dui varius nunc, at lacinia lacus neque at sem. Donec laoreet, nisl nec varius aliquam, nisl nisl aliquam nisl, nec aliquam nisl nisl nec nisl."
              },
              {
                id: "19",
                title: "SmartGrid",
                email: "email@email.com",
                phone: "(11) 99999-9999",
                cnpj: "97.317.991/0001-72",
                cep: "13042-670",
                status: "Pendente",
                solicitation: "0",
                reason: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus maiores optio, placeat, possimus magni iure blanditiis obcaecati excepturi praesentium eum suscipit corrupti officia! Facere possimus ipsam animi neque molestiae porro?",
                branch: "Energia Inteligente",
                imageUrl: image,
                imageAlt: "Imagem da SmartGrid",
                urlCompany: "https://www.smartgrid.com.br/",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat volutpat. Donec tincidunt, ipsum a ultrices ultrices, tellus dui varius nunc, at lacinia lacus neque at sem. Donec laoreet, nisl nec varius aliquam, nisl nisl aliquam nisl, nec aliquam nisl nisl nec nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat volutpat. Donec tincidunt, ipsum a ultrices ultrices, tellus dui varius nunc, at lacinia lacus neque at sem. Donec laoreet, nisl nec varius aliquam, nisl nisl aliquam nisl, nec aliquam nisl nisl nec nisl."
              },
              {
                id: "20",
                title: "EcoLogistics",
                email: "email@email.com",
                phone: "(11) 99999-9999",
                cnpj: "34.964.633/0001-31",
                cep: "12943-100",
                status: "Aceito",
                solicitation: "Encerrar",
                reason: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus maiores optio, placeat, possimus magni iure blanditiis obcaecati excepturi praesentium eum suscipit corrupti officia! Facere possimus ipsam animi neque molestiae porro?",
                branch: "Logística Sustentável",
                imageUrl: image2,
                imageAlt: "Imagem da EcoLogistics",
                urlCompany: "https://www.ecologistics.com.br/",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat volutpat. Donec tincidunt, ipsum a ultrices ultrices, tellus dui varius nunc, at lacinia lacus neque at sem. Donec laoreet, nisl nec varius aliquam, nisl nisl aliquam nisl, nec aliquam nisl nisl nec nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat volutpat. Donec tincidunt, ipsum a ultrices ultrices, tellus dui varius nunc, at lacinia lacus neque at sem. Donec laoreet, nisl nec varius aliquam, nisl nisl aliquam nisl, nec aliquam nisl nisl nec nisl."
              }
        ];

        setTimeout(() => {
          setArticles(companyData);
          setLoading(false);
        }, 10);
      } catch (err) {
        setError("Erro ao carregar os dados");
        setLoading(false);
      }
    };

    fetchCompanies();
  }, []);

  return { articles, loading, error };
};

export default useCompanies;
