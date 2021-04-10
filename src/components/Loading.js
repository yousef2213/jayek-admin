import gif from '../images/Loading.gif'

export default function Loading() {
    return (
        <div className="loading justify-content-center align-items-center">
            <div className="">
                <img src={gif} alt="preloader" />                
            </div>
    </div>
    )
}
