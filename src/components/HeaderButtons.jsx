export default function HeaderButtons({choice, handleClick}) {
  return (
    <>
            <li className={choice=='main'?'menu_li active':'menu_li'}><button onClick={()=>handleClick('main')}className='menu_button'>Главная</button></li>
            <li className={choice=='contacts'?'menu_li active':'menu_li'}><button onClick={()=>handleClick('contacts')}className='menu_button'>Контакты</button></li>
            <li className={choice=='products'?'menu_li active':'menu_li'}><button onClick={()=>handleClick('products')}className='menu_button'>Товары</button></li>
            <li className={choice=='basket'?'menu_li active':'menu_li'}><button onClick={()=>handleClick('basket')}className='menu_button'>Корзина</button></li>
            <li className={choice=='services'?'menu_li active':'menu_li'}><button onClick={()=>handleClick('services')}className='menu_button'>Услуги</button></li>
            <li className={choice=='news'?'menu_li active':'menu_li'}><button onClick={()=>handleClick('news')}className='menu_button'>Новости</button></li>

    </>
  )
}
