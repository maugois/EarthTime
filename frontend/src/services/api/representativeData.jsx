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
                title: "GreenWear",
                branch: "Vestuário Sustentável",
                imageUrl: image,
                imageAlt: "Imagem da GreenWear",
                urlCompany: "https://www.greenwear.com.br/",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat volutpat. Donec tincidunt, ipsum a ultrices ultrices, tellus dui varius nunc, at lacinia lacus neque at sem. Donec laoreet, nisl nec varius aliquam, nisl nisl aliquam nisl, nec aliquam nisl nisl nec nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat volutpat. Donec tincidunt, ipsum a ultrices ultrices, tellus dui varius nunc, at lacinia lacus neque at sem. Donec laoreet, nisl nec varius aliquam, nisl nisl aliquam nisl, nec aliquam nisl nisl nec nisl."
              },
              {
                title: "EcoTech",
                branch: "Tecnologia Ecológica",
                imageUrl: image2,
                imageAlt: "Imagem da EcoTech",
                urlCompany: "https://www.ecotech.com.br/",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat volutpat. Donec tincidunt, ipsum a ultrices ultrices, tellus dui varius nunc, at lacinia lacus neque at sem. Donec laoreet, nisl nec varius aliquam, nisl nisl aliquam nisl, nec aliquam nisl nisl nec nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat volutpat. Donec tincidunt, ipsum a ultrices ultrices, tellus dui varius nunc, at lacinia lacus neque at sem. Donec laoreet, nisl nec varius aliquam, nisl nisl aliquam nisl, nec aliquam nisl nisl nec nisl."
              },
              {
                title: "SolarSolutions",
                branch: "Energia Solar",
                imageUrl: image3,
                imageAlt: "Imagem da SolarSolutions",
                urlCompany: "https://www.solarsolutions.com.br/",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat volutpat. Donec tincidunt, ipsum a ultrices ultrices, tellus dui varius nunc, at lacinia lacus neque at sem. Donec laoreet, nisl nec varius aliquam, nisl nisl aliquam nisl, nec aliquam nisl nisl nec nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat volutpat. Donec tincidunt, ipsum a ultrices ultrices, tellus dui varius nunc, at lacinia lacus neque at sem. Donec laoreet, nisl nec varius aliquam, nisl nisl aliquam nisl, nec aliquam nisl nisl nec nisl."
              },
              {
                title: "BioPack",
                branch: "Embalagens Biodegradáveis",
                imageUrl: image,
                imageAlt: "Imagem da BioPack",
                urlCompany: "https://www.biopack.com.br/",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat volutpat. Donec tincidunt, ipsum a ultrices ultrices, tellus dui varius nunc, at lacinia lacus neque at sem. Donec laoreet, nisl nec varius aliquam, nisl nisl aliquam nisl, nec aliquam nisl nisl nec nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat volutpat. Donec tincidunt, ipsum a ultrices ultrices, tellus dui varius nunc, at lacinia lacus neque at sem. Donec laoreet, nisl nec varius aliquam, nisl nisl aliquam nisl, nec aliquam nisl nisl nec nisl."
              },
              {
                title: "PureWater",
                branch: "Tratamento de Água",
                imageUrl: image2,
                imageAlt: "Imagem da PureWater",
                urlCompany: "https://www.purewater.com.br/",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat volutpat. Donec tincidunt, ipsum a ultrices ultrices, tellus dui varius nunc, at lacinia lacus neque at sem. Donec laoreet, nisl nec varius aliquam, nisl nisl aliquam nisl, nec aliquam nisl nisl nec nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat volutpat. Donec tincidunt, ipsum a ultrices ultrices, tellus dui varius nunc, at lacinia lacus neque at sem. Donec laoreet, nisl nec varius aliquam, nisl nisl aliquam nisl, nec aliquam nisl nisl nec nisl."
              },
              {
                title: "UrbanFarm",
                branch: "Agricultura Urbana",
                imageUrl: image3,
                imageAlt: "Imagem da UrbanFarm",
                urlCompany: "https://www.urbanfarm.com.br/",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat volutpat. Donec tincidunt, ipsum a ultrices ultrices, tellus dui varius nunc, at lacinia lacus neque at sem. Donec laoreet, nisl nec varius aliquam, nisl nisl aliquam nisl, nec aliquam nisl nisl nec nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat volutpat. Donec tincidunt, ipsum a ultrices ultrices, tellus dui varius nunc, at lacinia lacus neque at sem. Donec laoreet, nisl nec varius aliquam, nisl nisl aliquam nisl, nec aliquam nisl nisl nec nisl."
              },
              {
                title: "EcoTrans",
                branch: "Transportes Verdes",
                imageUrl: image,
                imageAlt: "Imagem da EcoTrans",
                urlCompany: "https://www.ecotrans.com.br/",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat volutpat. Donec tincidunt, ipsum a ultrices ultrices, tellus dui varius nunc, at lacinia lacus neque at sem. Donec laoreet, nisl nec varius aliquam, nisl nisl aliquam nisl, nec aliquam nisl nisl nec nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat volutpat. Donec tincidunt, ipsum a ultrices ultrices, tellus dui varius nunc, at lacinia lacus neque at sem. Donec laoreet, nisl nec varius aliquam, nisl nisl aliquam nisl, nec aliquam nisl nisl nec nisl."
              },
              {
                title: "BioEnergy",
                branch: "Biocombustíveis",
                imageUrl: image2,
                imageAlt: "Imagem da BioEnergy",
                urlCompany: "https://www.bioenergy.com.br/",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat volutpat. Donec tincidunt, ipsum a ultrices ultrices, tellus dui varius nunc, at lacinia lacus neque at sem. Donec laoreet, nisl nec varius aliquam, nisl nisl aliquam nisl, nec aliquam nisl nisl nec nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat volutpat. Donec tincidunt, ipsum a ultrices ultrices, tellus dui varius nunc, at lacinia lacus neque at sem. Donec laoreet, nisl nec varius aliquam, nisl nisl aliquam nisl, nec aliquam nisl nisl nec nisl."
              },
              {
                title: "SmartRecycle",
                branch: "Reciclagem Inteligente",
                imageUrl: image3,
                imageAlt: "Imagem da SmartRecycle",
                urlCompany: "https://www.smartrecycle.com.br/",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat volutpat. Donec tincidunt, ipsum a ultrices ultrices, tellus dui varius nunc, at lacinia lacus neque at sem. Donec laoreet, nisl nec varius aliquam, nisl nisl aliquam nisl, nec aliquam nisl nisl nec nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat volutpat. Donec tincidunt, ipsum a ultrices ultrices, tellus dui varius nunc, at lacinia lacus neque at sem. Donec laoreet, nisl nec varius aliquam, nisl nisl aliquam nisl, nec aliquam nisl nisl nec nisl."
              },
              {
                title: "GreenBuilding",
                branch: "Construção Sustentável",
                imageUrl: image,
                imageAlt: "Imagem da GreenBuilding",
                urlCompany: "https://www.greenbuilding.com.br/",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat volutpat. Donec tincidunt, ipsum a ultrices ultrices, tellus dui varius nunc, at lacinia lacus neque at sem. Donec laoreet, nisl nec varius aliquam, nisl nisl aliquam nisl, nec aliquam nisl nisl nec nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat volutpat. Donec tincidunt, ipsum a ultrices ultrices, tellus dui varius nunc, at lacinia lacus neque at sem. Donec laoreet, nisl nec varius aliquam, nisl nisl aliquam nisl, nec aliquam nisl nisl nec nisl."
              },
              {
                title: "ZeroWaste",
                branch: "Desperdício Zero",
                imageUrl: image2,
                imageAlt: "Imagem da ZeroWaste",
                urlCompany: "https://www.zerowaste.com.br/",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat volutpat. Donec tincidunt, ipsum a ultrices ultrices, tellus dui varius nunc, at lacinia lacus neque at sem. Donec laoreet, nisl nec varius aliquam, nisl nisl aliquam nisl, nec aliquam nisl nisl nec nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat volutpat. Donec tincidunt, ipsum a ultrices ultrices, tellus dui varius nunc, at lacinia lacus neque at sem. Donec laoreet, nisl nec varius aliquam, nisl nisl aliquam nisl, nec aliquam nisl nisl nec nisl."
              },
              {
                title: "EarthCare",
                branch: "Consultoria Ambiental",
                imageUrl: image3,
                imageAlt: "Imagem da EarthCare",
                urlCompany: "https://www.earthcare.com.br/",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat volutpat. Donec tincidunt, ipsum a ultrices ultrices, tellus dui varius nunc, at lacinia lacus neque at sem. Donec laoreet, nisl nec varius aliquam, nisl nisl aliquam nisl, nec aliquam nisl nisl nec nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat volutpat. Donec tincidunt, ipsum a ultrices ultrices, tellus dui varius nunc, at lacinia lacus neque at sem. Donec laoreet, nisl nec varius aliquam, nisl nisl aliquam nisl, nec aliquam nisl nisl nec nisl."
              },
              {
                title: "GreenFinance",
                branch: "Finanças Sustentáveis",
                imageUrl: image,
                imageAlt: "Imagem da GreenFinance",
                urlCompany: "https://www.greenfinance.com.br/",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat volutpat. Donec tincidunt, ipsum a ultrices ultrices, tellus dui varius nunc, at lacinia lacus neque at sem. Donec laoreet, nisl nec varius aliquam, nisl nisl aliquam nisl, nec aliquam nisl nisl nec nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat volutpat. Donec tincidunt, ipsum a ultrices ultrices, tellus dui varius nunc, at lacinia lacus neque at sem. Donec laoreet, nisl nec varius aliquam, nisl nisl aliquam nisl, nec aliquam nisl nisl nec nisl."
              },
              {
                title: "OceanClean",
                branch: "Limpeza dos Oceanos",
                imageUrl: image2,
                imageAlt: "Imagem da OceanClean",
                urlCompany: "https://www.oceanclean.com.br/",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat volutpat. Donec tincidunt, ipsum a ultrices ultrices, tellus dui varius nunc, at lacinia lacus neque at sem. Donec laoreet, nisl nec varius aliquam, nisl nisl aliquam nisl, nec aliquam nisl nisl nec nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat volutpat. Donec tincidunt, ipsum a ultrices ultrices, tellus dui varius nunc, at lacinia lacus neque at sem. Donec laoreet, nisl nec varius aliquam, nisl nisl aliquam nisl, nec aliquam nisl nisl nec nisl."
              },
              {
                title: "GreenCuisine",
                branch: "Alimentação Saudável",
                imageUrl: image3,
                imageAlt: "Imagem da GreenCuisine",
                urlCompany: "https://www.greencuisine.com.br/",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat volutpat. Donec tincidunt, ipsum a ultrices ultrices, tellus dui varius nunc, at lacinia lacus neque at sem. Donec laoreet, nisl nec varius aliquam, nisl nisl aliquam nisl, nec aliquam nisl nisl nec nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat volutpat. Donec tincidunt, ipsum a ultrices ultrices, tellus dui varius nunc, at lacinia lacus neque at sem. Donec laoreet, nisl nec varius aliquam, nisl nisl aliquam nisl, nec aliquam nisl nisl nec nisl."
              },
              {
                title: "EcoHouse",
                branch: "Design de Interiores Sustentável",
                imageUrl: image,
                imageAlt: "Imagem da EcoHouse",
                urlCompany: "https://www.ecohouse.com.br/",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat volutpat. Donec tincidunt, ipsum a ultrices ultrices, tellus dui varius nunc, at lacinia lacus neque at sem. Donec laoreet, nisl nec varius aliquam, nisl nisl aliquam nisl, nec aliquam nisl nisl nec nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat volutpat. Donec tincidunt, ipsum a ultrices ultrices, tellus dui varius nunc, at lacinia lacus neque at sem. Donec laoreet, nisl nec varius aliquam, nisl nisl aliquam nisl, nec aliquam nisl nisl nec nisl."
              },
              {
                title: "CleanAir",
                branch: "Qualidade do Ar",
                imageUrl: image2,
                imageAlt: "Imagem da CleanAir",
                urlCompany: "https://www.cleanair.com.br/",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat volutpat. Donec tincidunt, ipsum a ultrices ultrices, tellus dui varius nunc, at lacinia lacus neque at sem. Donec laoreet, nisl nec varius aliquam, nisl nisl aliquam nisl, nec aliquam nisl nisl nec nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat volutpat. Donec tincidunt, ipsum a ultrices ultrices, tellus dui varius nunc, at lacinia lacus neque at sem. Donec laoreet, nisl nec varius aliquam, nisl nisl aliquam nisl, nec aliquam nisl nisl nec nisl."
              },
              {
                title: "TreeLife",
                branch: "Reflorestamento",
                imageUrl: image3,
                imageAlt: "Imagem da TreeLife",
                urlCompany: "https://www.treelife.com.br/",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat volutpat. Donec tincidunt, ipsum a ultrices ultrices, tellus dui varius nunc, at lacinia lacus neque at sem. Donec laoreet, nisl nec varius aliquam, nisl nisl aliquam nisl, nec aliquam nisl nisl nec nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat volutpat. Donec tincidunt, ipsum a ultrices ultrices, tellus dui varius nunc, at lacinia lacus neque at sem. Donec laoreet, nisl nec varius aliquam, nisl nisl aliquam nisl, nec aliquam nisl nisl nec nisl."
              },
              {
                title: "SmartGrid",
                branch: "Energia Inteligente",
                imageUrl: image,
                imageAlt: "Imagem da SmartGrid",
                urlCompany: "https://www.smartgrid.com.br/",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat volutpat. Donec tincidunt, ipsum a ultrices ultrices, tellus dui varius nunc, at lacinia lacus neque at sem. Donec laoreet, nisl nec varius aliquam, nisl nisl aliquam nisl, nec aliquam nisl nisl nec nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat volutpat. Donec tincidunt, ipsum a ultrices ultrices, tellus dui varius nunc, at lacinia lacus neque at sem. Donec laoreet, nisl nec varius aliquam, nisl nisl aliquam nisl, nec aliquam nisl nisl nec nisl."
              },
              {
                title: "EcoLogistics",
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
        }, 1000);
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
