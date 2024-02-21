// Tools.tsx

import React from 'react';
import './Tools.css'; 
import Image from 'next/image'

const Tools: React.FC = () => {
    const tech = [
        { name: "Javascript", icon: "/tools/javascript.svg" },
        { name: "Typescript", icon: "/tools/typescript.svg" },
        { name: "Swagger", icon: "/tools/swagger.svg" },
        { name: "Go", icon: "/tools/go.svg" },
        { name: "Python", icon: "/tools/python.svg" },
        { name: "DBeaver", icon: "/tools/dbeaver.svg" },
        { name: "SQL", icon: "/tools/sql.svg" },
        { name: "", icon: "/tools/mysql.svg" },
        { name: "PostgreSQL", icon: "/tools/postgresql.svg" },
        { name: "SCRUM", icon: "/tools/scrum.svg" },
        { name: "Canva", icon: "/tools/canva.svg" },
        { name: "Trello", icon: "/tools/trello.svg" },
        { name: "Jira", icon: "/tools/jira.svg" },
        { name: "Figma", icon: "/tools/figma.svg" },
        { name: "Docker", icon: "/tools/docker.svg" },
        { name: "Swagger", icon: "/tools/swagger.svg" },
        { name: "Postman", icon: "/tools/postman.svg" },
        { name: "GitHub", icon: "/tools/github.svg" },
        { name: "Git", icon: "/tools/git.svg" },
        { name: "Bootstrap", icon: "/tools/bootstrap.svg" },
        { name: "Tailwind", icon: "/tools/tailwindcss.svg" },
        { name: "Mantine", icon: "/tools/mantine.svg" },
        { name: "Express", icon: "/tools/express.svg" },
        { name: "Rails", icon: "/tools/rubyonrails.svg" },
        { name: "Node.js", icon: "/tools/nodedotjs.svg" },
        { name: "React", icon: "/tools/react.svg" },
        { name: "TypeScript", icon: "/tools/typescript.svg" },
    ];

    return (
        <div>
            
            <div className="tools-container">
                {tech.map((tool, index) => (
                    <div key={index} className="tool-item">
                        <Image src={tool.icon} alt={`${tool.name} Icon`} width={50} height={50} />
                        {tool.name}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Tools;
