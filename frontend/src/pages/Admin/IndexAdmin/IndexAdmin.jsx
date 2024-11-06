import React from "react";
import Admin from "../../../layouts/Admin.jsx";
import CardLink from "./CardLink/CardLink.jsx";
import { faUser, faBriefcase, faList } from '@fortawesome/free-solid-svg-icons';
import "./IndexAdmin.css";

export default function IndexAdmin() {
    return (
        <>
            <Admin>
                <div className="sectionAdminHome">
                    <div className="d-flex flex-wrap justify-content-around w-100">
                        <CardLink icon={faUser} title="Usuários" background="#A16400" linkToPage="/userAdmin">
                            Caso deseje visualizar e mudar os usuários do sistema, entre aqui
                        </CardLink>

                        <CardLink icon={faBriefcase} title="Empresas" background="#007f84" linkToPage="/companiesAdmin">
                            Caso deseje visualizar e mudar as empresas do sistema, entre aqui
                        </CardLink>
                        
                        <CardLink icon={faList} title="Solicitações" background="#979c1c" linkToPage="/solicitationAdmin">
                            Caso deseje visualizar as solicitações de parceria, entre aqui
                        </CardLink>
                    </div>
                </div>
            </Admin>
        </>
    );
}