import React, { useEffect, useState } from 'react';
import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import "../styles/Dashboard.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import logoNusaNet from "../assets/img/Logo-Nusanet-Full.png";
import internImg from "../assets/img/intern.jpeg";
import about from "../assets/img/about.png";
import student1 from "../assets/img/student1.png";
import student2 from "../assets/img/student2.png";
import student3 from "../assets/img/student3.png";
import student4 from "../assets/img/student4.png";
import student5 from "../assets/img/student5.png";
import student6 from "../assets/img/student6.png";
import cta1 from "../assets/img/cta1.png";
import cta2 from "../assets/img/cta2.png";
import cta3 from "../assets/img/cta3.png";
import cta4 from "../assets/img/cta4.png";
import cta5 from "../assets/img/cta5.png";
import cta6 from "../assets/img/cta6.png";

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => {
    setIsOpen(!isOpen); // Ubah status menu terbuka atau tidak
};

const handleScroll = () => {
  setIsOpen(false); // Tutup menu
};

window.addEventListener('scroll', handleScroll);

  useEffect(() => {
    const swiper = new Swiper('.testimonial', {
        slidesPerView: 3,
        spaceBetween: 30,
        grabCursor: true,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            clickable: true,
        },
        breakpoints: {
            540: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            },
        },
    });
    return () => {
        swiper.destroy();
    };
}, []);

  return (
    <div>
      <header className="sticky">
            <a href="/" className="logo">
                <img src={logoNusaNet} alt="" />
            </a>

            <ul className={isOpen ? 'navbar open' : 'navbar'}>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#testi">Review</a></li>
                <li><a href="#contact">Contact</a></li>
                <a href="/login" className="btn">Login</a>
            </ul>

            <div className="header-icons">
                <a href="#" onClick={handleMenuClick}>
                <FontAwesomeIcon id='menu-icon' icon={isOpen ? faTimes : faBars} />
                </a>
            </div>
        </header>
      {/* <!-- end header --> */}

      <section class="home" id="home">
        <div class="home-text">
          <h1>
            Mencari Tempat Magang?
            <br />
            Join Nusanet Internship Program
          </h1>
        </div>

        <div class="home-img">
          <img src={internImg} />
        </div>
      </section>

      <section class="container">
        <div class="plaintext" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          <p>
            Calling All Creative Minds! Join Our Internship Program! 🎉
            <br />
            <br />
            Are you a dynamic and imaginative individual looking for hands-on
            experience in a fast-paced and innovative work environment?
            <br /> Look no further! We’re thrilled to announce our internship
            opportunity where you can unleash your creativity and make a real
            impact.
          </p>
          <br />
          <p>
            Internship Overview:
            <br /> Our program offers a transformative experience that will
            ignite your passion and equip you with valuable skills for your
            future career. <br />
            You’ll work on real projects, shoulder responsibilities, and
            collaborate with our expert team. This is your chance to contribute
            meaningfully.
            <br />
            <br />
            Benefits:
            <br />
            – Self-development and networking opportunities
            <br />
            – Skill and knowledge development
            <br />
            – Positive social impact
            <br />
            – Certificate upon completion
            <br />
            Requirements:
            <br />
            – Students or fresh graduates
            <br />
            – educational background in computer science, Information Technology
            or any related.
            <br />
            <br />
            Ready to Launch Your Career? Apply Today! To apply, register here:
            https://s.id/NusanetIntershipProgram
            <br />
            Show us your creativity and how you can contribute to our team.
            Can’t wait to discover you as our next rising star!
          </p>
          <br />
          <br />
          <a href="/register" class="btn">
            Register Now
          </a>
        </div>
      </section>

      <section class="about" id="about">
        <div class="about-img">
          <img src={about} />
        </div>

        <div class="about-text">
          <h3>About Us</h3>
          <h2>Nusanet</h2>
          <p>
            Berdiri sejak tahun 1996 perusahaan web hosting dan design, Nusanet
            sekarang adalah sebuah ISP dengan izin nasional dari Dirjen Postel.
            <br />
            <br />
            Nusanet memiliki cabang di Medan, Jakarta, Bali, Surabaya,
            Palembang, untuk melayani Dedicated dan Broadband Internet dengan
            menggunakan Radio Wireless dan Fiber Optik. Nusanet juga menyediakan
            layanan Dedicated Server dan Colocation Server di Datacenter
            neuCentrIX Medan, Jakarta, Surabaya dan Bali.
          </p>
        </div>
      </section>

      <section class="testi" id="testi">
        <div class="center-text">
          <h5>REVIEW</h5>
          <h2>Our Students Say...</h2>
        </div>

        <div class="swiper testimonial">
          <div class="swiper-wrapper">
            <div class="swiper-slide card">
              <div class="user">
                <img src={student1} alt="student1"/>
                <div class="user-info">
                  <h3>Amanda</h3>
                  <div class="star">
                    <a href="#">
                      <FontAwesomeIcon className='FontAwesomeIcon' icon={faStar} />
                    </a>
                    <a href="#">
                      <FontAwesomeIcon className='FontAwesomeIcon' icon={faStar} />
                    </a>
                    <a href="#">
                      <FontAwesomeIcon className='FontAwesomeIcon' icon={faStar} />
                    </a>
                    <a href="#">
                      <FontAwesomeIcon className='FontAwesomeIcon' icon={faStar} />
                    </a>
                    <a href="#">
                      <FontAwesomeIcon className='FontAwesomeIcon' icon={faStar} />
                    </a>
                  </div>
                </div>
              </div>
              <p>
                Materi dibuat berdasarkan case yang sering dihadapi di dunia
                pekerjaan. Sehingga potensinya besar untuk kamu semua yang
                mencoba belajar hal baru.
              </p>
            </div>

            <div class="swiper-slide card">
              <div class="user">
                <img src={student2} alt="student2" />
                <div class="user-info">
                  <h3>Deny</h3>
                  <div class="star">
                    <a href="#">
                      <FontAwesomeIcon className='FontAwesomeIcon' icon={faStar} />
                    </a>
                    <a href="#">
                      <FontAwesomeIcon className='FontAwesomeIcon' icon={faStar} />
                    </a>
                    <a href="#">
                      <FontAwesomeIcon className='FontAwesomeIcon' icon={faStar} />
                    </a>
                    <a href="#">
                      <FontAwesomeIcon className='FontAwesomeIcon' icon={faStar} />
                    </a>
                    <a href="#">
                      <FontAwesomeIcon className='FontAwesomeIcon' icon={faStar} />
                    </a>
                  </div>
                </div>
              </div>
              <p>
                Kelasnya super intensive dan interactive, kurikulumnya rapi,
                mentornya & bisa menggapai semua.
              </p>
            </div>

            <div class="swiper-slide card">
              <div class="user">
                <img src={student3} alt="student3" />
                <div class="user-info">
                  <h3>Putri</h3>
                  <div class="star">
                    <a href="#">
                      <FontAwesomeIcon className='FontAwesomeIcon' icon={faStar} />
                    </a>
                    <a href="#">
                      <FontAwesomeIcon className='FontAwesomeIcon' icon={faStar} />
                    </a>
                    <a href="#">
                      <FontAwesomeIcon className='FontAwesomeIcon' icon={faStar} />
                    </a>
                    <a href="#">
                      <FontAwesomeIcon className='FontAwesomeIcon' icon={faStar} />
                    </a>
                    <a href="#">
                      <FontAwesomeIcon className='FontAwesomeIcon' icon={faStar} />
                    </a>
                  </div>
                </div>
              </div>
              <p>
                So insighful dan materi yang super berbobot ini dijelaskan
                dengan ringan. Hightlight yang penting disampaikan berulang
                kali.
              </p>
            </div>

            <div class="swiper-slide card">
              <div class="user">
                <img src={student4} alt="student4" />
                <div class="user-info">
                  <h3>Luthvy</h3>
                  <div class="star">
                    <a href="#">
                      <FontAwesomeIcon className='FontAwesomeIcon' icon={faStar} />
                    </a>
                    <a href="#">
                      <FontAwesomeIcon className='FontAwesomeIcon' icon={faStar} />
                    </a>
                    <a href="#"> 
                      <FontAwesomeIcon className='FontAwesomeIcon' icon={faStar} />
                    </a>
                    <a href="#">
                      <FontAwesomeIcon className='FontAwesomeIcon' icon={faStar} />
                    </a>
                    <a href="#">
                      <FontAwesomeIcon className='FontAwesomeIcon' icon={faStar} />
                    </a>
                  </div>
                </div>
              </div>
              <p>
                Penyampaiannya jelas, penjelasannya dengan contoh real, jadi
                bisa dibayangkan secara langsung.
              </p>
            </div>

            <div class="swiper-slide card">
              <div class="user">
                <img src={student5} alt="student5" />
                <div class="user-info">
                  <h3>Lola</h3>
                  <div class="star">
                    <a href="#">
                      <FontAwesomeIcon className='FontAwesomeIcon' icon={faStar} />
                    </a>
                    <a href="#">
                      <FontAwesomeIcon className='FontAwesomeIcon' icon={faStar} />
                    </a>
                    <a href="#">
                      <FontAwesomeIcon className='FontAwesomeIcon' icon={faStar} />
                    </a>
                    <a href="#">
                      <FontAwesomeIcon className='FontAwesomeIcon' icon={faStar} />
                    </a>
                    <a href="#">
                      <FontAwesomeIcon className='FontAwesomeIcon' icon={faStar} />
                    </a>
                  </div>
                </div>
              </div>
              <p>
                Gabung BelYuk jadi salah satu keputusan terbaik karna delain
                module dan ilmunya dapet, networking juga dapet.
              </p>
            </div>

            <div class="swiper-slide card">
              <div class="user">
                <img src={student6} alt="student6" />
                <div class="user-info">
                  <h3>Edlyn</h3>
                  <div class="star">
                    <a href="#">
                      <FontAwesomeIcon className='FontAwesomeIcon' icon={faStar} />
                    </a>
                    <a href="#">
                      <FontAwesomeIcon className='FontAwesomeIcon' icon={faStar} />
                    </a>
                    <a href="#">
                      <FontAwesomeIcon className='FontAwesomeIcon' icon={faStar} />
                    </a>
                    <a href="#">
                      <FontAwesomeIcon className='FontAwesomeIcon' icon={faStar} />
                    </a>
                    <a href="#">
                      <FontAwesomeIcon className='FontAwesomeIcon' icon={faStar} />
                    </a>
                  </div>
                </div>
              </div>
              <p>
                Belyuk ga ada lawan! Lengkap banget materinya. Khusus buat yang
                niat dan serius.
              </p>
            </div>
          </div>
          <div class="swiper-pagination"></div>
          <div class="swiper-button-prev swpr-btn"></div>
          <div class="swiper-button-next swpr-btn"></div>
        </div>
      </section>

      <section class="cta">
        <div class="center-text">
          <h2>Our Partner</h2>
        </div>

        <div class="cta-content">
          <div class="cta-img">
            <img src={cta1} alt="cta1" />
          </div>

          <div class="cta-img">
            <img src={cta2} alt="cta2" />
          </div>

          <div class="cta-img">
            <img src={cta3} alt="cta3" />
          </div>

          <div class="cta-img">
            <img src={cta4} alt="cta4" />
          </div>

          <div class="cta-img">
            <img src={cta5} alt="cta5" />
          </div>

          <div class="cta-img">
            <img src={cta6} alt="cta6" />
          </div>
        </div>
      </section>

      <section class="footer" id="contact">
        <div class="main-footer">
          <div class="footer-content">
            <img src={logoNusaNet} />
            <div class="sosmed">
              <a href="https://www.facebook.com/nusanetmdn/">
                <i class="fa-brands fa-square-facebook"></i>
              </a>
              <a href="https://www.instagram.com/nusanet/">
                <i class="fa-brands fa-square-instagram"></i>
              </a>
              <a href="https://twitter.com/nusanet_mdn">
                <i class="fa-brands fa-square-x-twitter"></i>
              </a>
              <a href="https://www.linkedin.com/company/mediaantarnusa/">
                <i class="fa-brands fa-linkedin"></i>
              </a>
            </div>
          </div>

          <div class="footer-content">
            <h4 class="text-footer">Quick Link</h4>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#categories">Categories</a>
            </li>
            <li>
              <a href="courses.html">Courses</a>
            </li>
            <li>
              <a href="#about">About Us</a>
            </li>
          </div>

          <div class="footer-content">
            <h4 class="text-footer">Others</h4>
            <li>
              <a href="#">Profil</a>
            </li>
            <li>
              <a href="#">Login</a>
            </li>
            <li>
              <a href="#">Register</a>
            </li>
            <li>
              <a href="#">My Class</a>
            </li>
          </div>

          <div class="footer-content">
            <h4 class="text-footer">Contact</h4>
            <p>
              <i class="fa fa-map-marker-alt me-3"></i>Balikpapan, Indonesia,
              76111
            </p>
            <p>
              <i class="fa-solid fa-envelope"></i>admission@belyuk.co
            </p>
            <p>
              <i class="fa-solid fa-phone"></i>(0542) – 421 113
            </p>
          </div>
        </div>
      </section>

      <div class="last-text">
        <p>©2024 PT Media Antar Nusa. All right reserved</p>
      </div>
    </div>
  );
};

export default Dashboard;
