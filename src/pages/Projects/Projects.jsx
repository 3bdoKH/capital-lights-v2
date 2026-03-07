import React from 'react';
import project1 from '../../media/projects/project1.png';
import project2 from '../../media/projects/project2.png';
import project3 from '../../media/projects/project3.png';
import './Projects.css';

const projects = [
    {
        id: 1,
        image: project1,
        category: { en: 'Electrical Works', ar: 'الأعمال الكهربائية' },
        title: {
            en: 'Al-Malaz Substation – Riyadh',
            ar: 'محطة الملز الكهربائية – الرياض',
        },
        description: {
            en: 'Supply, installation and commissioning of a 132/13.8 kV outdoor substation for the Saudi Electricity Company. Works included civil, mechanical and electrical scopes.',
            ar: 'توريد وتركيب وتشغيل محطة تحويل 132/13.8 كيلوفولت للشركة السعودية للكهرباء. شملت الأعمال المدنية والميكانيكية والكهربائية.',
        },
        client: { en: 'Saudi Electricity Company (SEC)', ar: 'الشركة السعودية للكهرباء' },
        year: '2015',
    },
    {
        id: 2,
        image: project2,
        category: { en: 'Mechanical Works', ar: 'الأعمال الميكانيكية' },
        title: {
            en: 'Ministry of Health – HVAC & Plumbing',
            ar: 'وزارة الصحة – التكييف والسباكة',
        },
        description: {
            en: 'Full mechanical scope for a 600-bed hospital in Riyadh including HVAC, medical gas supply, fire protection and sanitary installations.',
            ar: 'تنفيذ المدى الميكانيكي الكامل لمستشفى 600 سرير بالرياض يشمل التكييف وإمدادات الغاز الطبي والحماية من الحريق والتمديدات الصحية.',
        },
        client: { en: 'Ministry of Health', ar: 'وزارة الصحة' },
        year: '2018',
    },
    {
        id: 3,
        image: project3,
        category: { en: 'Civil & General Construction', ar: 'الأعمال المدنية والإنشاءات' },
        title: {
            en: 'National Guard Facilities – Riyadh',
            ar: 'منشآت الحرس الوطني – الرياض',
        },
        description: {
            en: 'Design and build of administrative complex including structural, architectural, electromechanical and infrastructure works. Total built-up area 12,000 m² .',
            ar: 'تصميم وبناء مجمع إداري يشمل الأعمال الإنشائية والمعمارية والكهروميكانيكية والبنية التحتية. المساحة الإجمالية 12,000 م² .',
        },
        client: { en: 'Saudi Arabian National Guard (SANG)', ar: 'الحرس الوطني السعودي' },
        year: '2020',
    },
];

function Projects({ lang }) {
    const ar = lang === 'ar';

    return (
        <div className="projects page-content">

            {/* Page Banner */}
            <div className="projects__banner">
                <h1>{ar ? 'المشاريع' : 'Projects'}</h1>
                <p>{ar ? 'نماذج من أعمالنا المنجزة' : 'A selection of our completed works'}</p>
            </div>

            {/* Projects Grid */}
            <section className="projects__section">
                <div className="projects__container">
                    <div className="projects__grid">
                        {projects.map((proj) => (
                            <article key={proj.id} className="project-card">
                                <div className="project-card__image-wrap">
                                    <img
                                        src={proj.image}
                                        alt={proj.title.en}
                                        className="project-card__image"
                                    />
                                    <span className="project-card__category">
                                        {ar ? proj.category.ar : proj.category.en}
                                    </span>
                                </div>

                                <div className="project-card__body">
                                    <h3 className="project-card__title">
                                        {ar ? proj.title.ar : proj.title.en}
                                    </h3>
                                    <p className="project-card__desc">
                                        {ar ? proj.description.ar : proj.description.en}
                                    </p>
                                    <div className="project-card__meta">
                                        <span className="project-card__meta-item">
                                            <strong>{ar ? 'العميل: ' : 'Client: '}</strong>
                                            {ar ? proj.client.ar : proj.client.en}
                                        </span>
                                        <span className="project-card__meta-item">
                                            <strong>{ar ? 'السنة: ' : 'Year: '}</strong>
                                            {proj.year}
                                        </span>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
}

export default Projects;
