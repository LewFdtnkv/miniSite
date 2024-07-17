export default function Footer({choice, handleClick}) {
  return (
    <>
    <footer className="footer_style">
        <div className="img_footer">
            <img src="./icons8-маленькие-кошмары-50.png" alt="" className="img_icon" />
            <div className="prog_site">
                <p className="granit_title">© 2021 СК Гранит</p>
                <p>Разработка сайта</p>
            </div>
            </div>
        <div className="centered_footer">
        <ul className="menu_footer">
                <h2 className="h2_footer_menu">МЕНЮ</h2>
                <li className="li_footer"><button className="li_footer_button" onClick={()=>handleClick('main')}>О компании</button></li>
                <li className="li_footer"><button className="li_footer_button" onClick={()=>handleClick('products')}>Техника</button></li>
                <li className="li_footer"><button className="li_footer_button"onClick={()=>handleClick('basket')}>Корзина</button></li>
                <li className="li_footer"><button className="li_footer_button" onClick={()=>handleClick('services')}>Услуги</button></li>
                <li className="li_footer"><button className="li_footer_button" onClick={()=>handleClick('news')}>Новости</button></li>
        </ul>
        <ul className="menu_footer">
            <h2 className="h2_footer_menu">СВЯЗАТЬСЯ</h2>
            <li className="li_footer">+7(922) 451-55-88</li>
            <li className="li_footer">+7 (922) 454-03-74</li>
            <li className="li_footer">office@granit-sk.ru</li>
        </ul>
        <div className="menu_footer_div">
        <h2 className="h2_footer_menu">АДРЕС</h2>
        629809, Ямало-Ненецкий АО, г. Ноябрьск, промузел Пелей, панель XV
        </div>
        </div>
        
    </footer>
    </>
  )
}
