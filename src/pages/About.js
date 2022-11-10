import { useState } from 'react';
import husein from './husein.png';
import './About.css';

function About(){
    const [me, setMe] = useState({
        name: "Muhammad Husein Arrasid",
        nickname: "Husein",
        univ: "Universitas Pertahanan Republik Indonesia",
        role: "Mahasiswa",
        major: "Teknik Informatika"
    })

    return (
        <>
            <section class="about_section" id="About">
                <div class="about_img">
                    <img src={husein}  alt="husein"></img>
                </div>
                <div class="about_details">
                    <h1>About Me</h1>
                    <p> Hai saya  {me.name}, anda bisa memanggil saya dengan panggilan {me.nickname}. Saya seorang {me.role} di kampus {me.univ} pada program studi {me.major}. Senang bisa berkenalan dengan kalian semua, terimakasih telah mengunjungi halaman ini. salam hangat {me.nickname} </p>
                </div>
            </section>
        </>
    )
}

export default About