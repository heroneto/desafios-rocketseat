import './styles.scss'
import musicPicture from './assets/music-picture-big.png'
import { IoPlayBack, IoPlayForward, IoPlay } from "react-icons/io5";


export function MusicPlayerPage() {
    return (
        <div className='music-player-container'>
            <div className='music-player-big'>
                <div className='music-player-content'>

                    <div className='music-picture'>
                        <img src={musicPicture} width={196} />
                    </div>
                    <div className='music-info'>
                        <span className='music-name'>Acorda Devinho</span>
                        <span className='music-artist'>Banda Rocketseat</span>
                    </div>
                    <div className='music-controls'>
                        <IoPlayBack size={28} />
                        <IoPlay size={28} />
                        <IoPlayForward size={28} />
                    </div>
                    <div className='music-progress'>
                        <progress value='32' max='100'></progress>
                        <div className='progress-time'>
                            <span>01:20</span>
                            <span>03:14</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='music-player-med'>
                <div className='music-player-content'>

                    <div className='music-header'>
                        <div className='music-picture'>
                            <img src={musicPicture} width={84} />
                        </div>
                        <div className='music-info'>
                            <span className='music-name'>Acorda Devinho</span>
                            <span className='music-artist'>Banda Rocketseat</span>
                        </div>

                    </div>

                    <div className='music-controls'>
                        <IoPlayBack size={28} />
                        <IoPlay size={28} />
                        <IoPlayForward size={28} />
                    </div>
                    <div className='music-progress'>
                        <progress value='32' max='100'></progress>
                        <div className='progress-time'>
                            <span>01:20</span>
                            <span>03:14</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className='music-player-small'>
                <div className='music-player-content'>

                    <div className='music-header'>
                        <div className='music-picture'>
                            <img src={musicPicture} width={84} />
                        </div>
                        <div className='music-info'>
                            <span className='music-name'>Acorda Devinho</span>
                            <span className='music-artist'>Banda Rocketseat</span>
                        </div>

                    </div>

                    <div className='music-controls'>
                        <IoPlayBack size={28} />
                        <IoPlay size={28} />
                        <IoPlayForward size={28} />
                    </div>
                    {/* <div className='music-progress'>
                        <progress value='32' max='100'></progress>
                        <div className='progress-time'>
                            <span>01:20</span>
                            <span>03:14</span>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}