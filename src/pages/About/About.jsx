import React from 'react';
import about01 from '../../media/about/about01.jpg';
import gallery1 from '../../media/about/Gallery_1.jpg';
import gallery2 from '../../media/about/Gallery_2.jpg';
import gallery4 from '../../media/about/Gallery_4.jpg';
import './About.css';

const companyProfile = {
    en: `Capital Lights Electromechanical Contracting Establishment was established in 1387(1967) to carry our electromechanical and civil work contracts. The Establishment started operations and managed to build good reputation in the contracting sector in the Kingdom with the onset of early development take off in the country. The Establishment carried out projects with a value exceeding SR 250 million up to 1405 (1985). With the increase in the Establishment operations it was converted into a limited liability company under the name "Adhwa' Al Asima Electromechanical Co.". The Company is still participating in execution of electricity projects in the Kingdom and the average value of annual projects it executes is above SR 150 million. The Company is classified in the field of electromechanical contracting by the Contractors' Classification Committee in the I Grade and is also a member of Riyadh Chamber of Commerce and Industry.`,
    ar: `تأسست مؤسسة أضواء العاصمة للمقاولات الكهروميكانيكية عام 1387هـ (1967م) لتنفيذ مشاريع الكهروميكانيك والأعمال المدنية. وقد بدأت المؤسسة أعمالها وتمكنت من بناء سمعة طيبة في قطاع المقاولات بالمملكة. ونفذت المؤسسة مشاريع تتجاوز قيمتها 250 مليون ريال حتى عام 1405هـ (1985م). ومع توسع أعمالها تحولت إلى شركة ذات مسؤولية محدودة تحت اسم "شركة أضواء العاصمة الكهروميكانيكية". لا تزال الشركة تشارك في تنفيذ مشاريع الكهرباء بالمملكة وتتجاوز قيمة مشاريعها السنوية 150 مليون ريال. وهي مصنفة في مجال المقاولات الكهروميكانيكية لدى لجنة تصنيف المقاولين بالدرجة الأولى، وعضو بغرفة تجارة وصناعة الرياض.`,
};

function About({ lang }) {
    const ar = lang === 'ar';

    return (
        <div className="about page-content">

            {/* Company Profile Section */}
            <section className="about__profile">
                <div className="about__profile-inner">

                    {/* Text column */}
                    <div className="about__text-col">
                        <h2 className="about__section-title">
                            {ar ? 'نبذة عن الشركة' : 'Company Profile'}
                        </h2>
                        <p className="about__body">
                            {ar ? companyProfile.ar : companyProfile.en}
                        </p>
                    </div>

                    {/* Photo column */}
                    <div className="about__photo-col">
                        <img
                            src={about01}
                            alt="Capital Lights facility"
                            className="about__main-photo"
                        />
                    </div>

                </div>
            </section>

            {/* Gallery Section */}
            <section className="about__gallery">
                <div className="about__gallery-inner">
                    <div className="about__gallery-item">
                        <img src={gallery1} alt="Project site 1" />
                    </div>
                    <div className="about__gallery-item">
                        <img src={gallery2} alt="Project site 2" />
                    </div>
                    <div className="about__gallery-item">
                        <img src={gallery4} alt="Project site 3" />
                    </div>
                </div>
            </section>

        </div>
    );
}

export default About;
