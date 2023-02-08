import { Slider } from '../components'
import '../styles/caracteristicas.css'

export const Caracteristicas = () => {
    return (
        <section id="caracteristicas" className="caracteristicas">
            <div className="wrapper">
                <div className="left_side">
                    <Slider />
                </div>

                <div className="right_side">
                    right side
                </div>
            </div>
        </section>
    )
}
