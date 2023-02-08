import { Slider } from '../components'
import '../styles/caracteristicas.css'
import { caracData } from '../data/caracData';

export const Caracteristicas = () => {
    return (
        <section id="caracteristicas" className="caracteristicas">
            <div className="wrapper">
                <div className="left_side">
                    <Slider />
                </div>

                <div className="right_side">
                    <p>Aprovecha</p>
                    <div>
                        <span>Cada una de las </span>
                        <span className='outline'>posibilidades</span>
                    </div>

                    <ul className='right_list'>
                        { caracData.map(data=>(
                            <li key={data.details}>
                                <img src={data.curren} alt="currenci" />
                                {data.details}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}
