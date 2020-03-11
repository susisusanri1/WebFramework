import React,{Component} from 'react';
import ig from './img/ig.png';
import fb from './img/fb.png';
import mail from './img/mail.png';
import fp from './img/fp.jpeg';

class CV extends Component{
    render(){
        return(
            <div>
                <body>
                <ul>
                    <li><a href="#index">About</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#education">Education</a></li>
                    <li><a href="#skill">Skill</a></li>
                    <li><a href="#interest">Hobby or Interest</a></li>
                    
                </ul>
                <section id="index">
                <h1>My Portfolio - Susi Susanti</h1>
                <h2>ABOUT</h2>
                <div className="bg-1 newspaper">
                <div className="a">
                    <p><img src={fp} width="600"/>
                    </p>
                    </div> 
                </div>
                </section>
        
                <section id="experience">
                <h2>EXPERIENCE</h2>
                <div class="bg-1 newspaper">
                <div class="a">
                    <p>I took a major in informatics engineering, and it turned out that in that department there was a mathematics course. I am grateful that only basic math, in the first semester I just knew about the code and I first worked on the code with a lot of errors and just learning now. Thank God, in this semester I have started to understand the code, even though I just knew about the web.
                    </p>
                    </div> 
                </div>
                </section>

                <section id="education">
                <h2>EDUCATION</h2>
                <div className="bg-1 newspaper">
                <div className="a">
                    <p>SDN PADEMAWU BARAT <small>1 - 2011</small></p>
                        <p>SMPN 1 PADEMAWU <small>- 2015</small></p>
                        <p>SMAN 2 PAMEKASAN – IPA1 <small>2017</small></p>
                        <p>POLITEKNIK NEGERI MALANG – TEKNIK INFORMATIKA <small>2017</small></p>
                    </div> 
                </div>
                </section>

                <section id="skill">
                <h2>SKILL</h2>
                <div class="bg-1 newspaper">
                <div class="a">
                    <p>Isi
                    </p>
                    </div> 
                </div>
                </section>

                <section id="interest">
                <h2>Hobby or Interest</h2>
                <div class="bg-1 newspaper">
                <div class="a">
                    <p>Dimulai sejak saya mengenal apa itu komputer dan mencoba menggunakannya sebagai suatu media yang dapat membantu menjalankan beberapa pekerjaan saya. Sejak saat itu, saya memiliki ketertarikan tersendiri untuk terus menggunakan komputer.</p>
                    <p>Berawal dari aplikasi yang sangat sederhana seperti Microsoft office word, Microsoft office excel, Microsoft office power point dan beberapa aplikasi lainnya yang mampu membantu saya dalam menyelesaikan beberapa tugas, juga dengan suatu jaringan internet yang menambah kemudahan untuk saya berkomunikasi, menjalankan, dan mengerjakan tugas dan pekerjaan saya dengan mudah dan menyenangkan. saya memiiki keterbatasan kemampuan tentang bidang informatika dan memiliki kemauan meskipun saya waktu SMA tidak ada pelajaran TI.</p>
                    <p>Tujuan saya agar bisa belajar banyak tentang informatika. Hal ini juga didasari atas keinginan saya yang ingin membuat suatu program yang mampu mempermudah pekerjaan orang dan bermanfaat bagi pengguna kelak. Menjadi pengguna hasil kemajuan teknologi informatika yang baik bukanlah suatu hal yang mampu membangkitkan semangat kepercayaan diri untuk saya pribadi, tapi kemampuan membuat suatu program yang dapat digunakan banyak orang dengan baik mampu membuat dan membangkitkan rasa percaya diri juga kebanggaan. Rasa ketertarikan dengan keterbatasan ilmu pengetahuan tentang hal ini pun kembali menimbulkan rasa ingin tahu dan rasa ingin mampu untuk menjalankannya. Jurusan teknik informatika, satu dari sekian banyak pilihan yang ingin saya tekuni.</p>
                    <p>Bagaimana saya dapat mengenal beberapa perangkat lunak, keras, dan segala macam aplikasi lebih dalam lagi. Juga tentang bagaimana saya mampu membuat suatu program yang bermanfaat bagi penggunanya suatu saat nanti.
                    </p>
                    </div> 
                </div>
                </section>

                <div className="b">
                    <p>
                            <a href=""><img src={ig}/></a>
                            <a href=""><img src={fb}/></a>
                            <a href=""><img src={mail}/></a>
                    </p>
                </div>

                <footer>2018 | Design By <a href="#">Susi Susanti</a></footer>
                </body>
            </div>
        );
        
    }
}
export default CV;