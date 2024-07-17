import { ways } from "../datasets/data"
import WayToTeach from "./WayToTeach"
export default function MainPage() {
  return (
    <>
        <section>
            <h1 className="titleName">Содержание промысловых дорог и строительство автозимников</h1>
            <img className='img_tractor'src='./tractor.jpg' alt="" />
            <div className="text_name_page"><strong className="ttl_company">«Строительная компания Гранит» построена на
            40 летнем опыте и технологиях работы на Ямале</strong>
            <h3 className="about_company">Наши специалисты работали(работают) на строительстве и содержании дорог в п. Тазовском и Газ-Сале, на Самбургском, Русском, Тарасовском, Губкинском, Комсомольском, Барсуковском, Пурпейском, Чатылькинском, Холмистом, Воргенском, Вынгапуровском, Новогоднем и многих других месторождениях Ямала, на Чукотке. Строили дороги МГ «Сила Сибири» в Якутии.
            </h3></div>
            
        </section>

    </> 
  )
}
