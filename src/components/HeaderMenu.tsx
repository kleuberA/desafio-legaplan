import style from '../styles/headerMenu.module.scss';
import Logo from '../../public/logo.svg';
import Image from 'next/image';

export default function HeaderMenu() {
    return (
        <div className={style.container}>
            <div className={style['inner-container']}>
                <div className={style.logo}>
                    <Image src={Logo} alt={''} />
                </div>
                <div className={style['welcome-message']}>
                    <h1>Bem-vindo de volta, Marcus</h1>
                </div>
                <div className={style['date-info']}>
                    <span>Segunda, 01 de dezembro de 2025</span>
                </div>
            </div>
        </div>
    )
}