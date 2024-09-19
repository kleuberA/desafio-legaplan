import HeaderMenu from '@/components/HeaderMenu';
import style from '../styles/index.module.scss';
import Tarefas from '@/components/Tarefas';

export default function Home() {
  return (
    <div className={style.container}>
      <HeaderMenu />
      <Tarefas />
    </div>
  );
}
