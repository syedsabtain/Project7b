import React, {useState, useEffect} from 'react'


const Timer = () => {
    
    let [countdown,
        setCountdown] = useState(60);
    let [isontimer,
        setIsontimer] = useState(false)
    let [counter,
        setCounter] = useState(0);
        let [aa,
            setAa] = useState < any > ();
    let [ison,
        setIson] = useState(false);
    
    let [selec,
        setSelec] = useState < number > (0);

    let [timer,
        setTimer] = useState({Days: 0, Hours: 0, Minutes: 0, Seconds: 0})
    function fntime(){
        alert('stoped')
        clearInterval(aa);
        setIsontimer(false)
    }
    useEffect(()=>{
        
        if(isontimer)
        {
            if(countdown<=0)
        {
           fntime();
        }
        }
    })

    const handleclick = (id : number) => {
        if (id === 0) {
            setIson(true);
            setAa(setInterval(() => {
                setCounter(++counter);
            }, 1000));
         
           
        } else if (id === 1) {
            setIsontimer(true);
            setAa(setInterval(() => {
                    setCountdown(--countdown);
            }, 1000));
            
        }
        
    }
    const handlestop = (id : number) => {

        if (id === 0) {
            setIson(false);
            clearInterval(aa);
            
        } else if (id === 1) {
            setIsontimer(false);
            clearInterval(aa);


        }
        
    }
    const handlereset = (id : number) => {

        if (id === 0) {
            setCounter(0);
            setIson(false);
            clearInterval(aa);
        } else if (id === 1) {
            setCountdown(60);
            setIsontimer(false);
            clearInterval(aa);
        }
        
    }
    
    const handlechange = (e : React.ChangeEvent < HTMLSelectElement >) => {
        setSelec(parseInt(e.target.value));
        setIsontimer(false);
        setIson(false);
    }
    const handletimer = (e : React.ChangeEvent < HTMLSelectElement >, id : number) => {

        switch (id) {
            case 0:
                setTimer({
                    Days: parseInt(e.target.value) * 86400,
                    Hours: timer.Hours,
                    Minutes: timer.Minutes,
                    Seconds: timer.Seconds
                });break;
            case 1:
                setTimer({
                    Days: timer.Days,
                    Hours: parseInt(e.target.value) * 3600,
                    Minutes: timer.Minutes,
                    Seconds: timer.Seconds
                });break;
            case 2:
                setTimer({
                    Days: timer.Days,
                    Hours: timer.Hours,
                    Minutes: parseInt(e.target.value) * 60,
                    Seconds: timer.Seconds
                });break;
            case 3:
                setTimer({
                    Days: timer.Days,
                    Hours: timer.Hours,
                    Minutes: timer.Minutes,
                    Seconds: parseInt(e.target.value)
                });break;

            default:
                break;
        }

    }
    const handleset = () => {
       
        setCountdown(timer.Days + timer.Hours + timer.Minutes + timer.Seconds);
    }
    const arry=['1','2','3'];
    const arryhour= Array.from(Array(24), (_, i) => i + 1);
    const arryminutes=Array.from(Array(60), (_, i) => i + 1);
    const arryseconds=Array.from(Array(60), (_, i) => i + 1);

    return (

        <div className='container mt-5 cont shadow-lg '>
            <div className='row justify-content-center'>
                <div className='col-md-6'>
                    <select
                        className="custom-select"
                        id="inputGroupSelect01"
                        onChange={handlechange}>
                        <option defaultValue='0' value='0'>Timer</option>
                        <option value="1">Stop Watch</option>

                    </select>
                </div>
            </div>
            <div className='row mt-5 text-center  justify-content-center'>

                {selec === 1
                    ? (
                        <div className='col-md-6'>
                            <h1 className='hd mb-5 '>Stop Watch</h1>

                            <h1 className='mb-5'>{Math.floor(counter / (1 * 60 * 60 * 24))}
                                <span className='txt'>days</span>
                                :{Math.floor((counter / (1 * 60 * 60)) % 24)}
                                <span className='txt'>hour</span>
                                :{Math.floor((counter / 1 / 60) % 60)}
                                <span className='txt'>minutes</span>
                                :{Math.floor((counter / 1) % 60)}
                                <span className='txt'>seconds</span>
                            </h1>
                            {ison
                                ? (
                                    <button
                                        className='btn btn-outline-danger mr-5 stop_btn'
                                        onClick={() => {
                                        handlestop(0)
                                    }}>Stop</button>
                                )
                                : (
                                    <button
                                        className='btn btn-outline-primary mr-4 start_btn'
                                        id='start_btnn'
                                        onClick={() => {
                                        handleclick(0)
                                    }}>Start</button>
                                )}

                            <button
                                className='btn btn-outline-danger reset_btn'
                                onClick={() => {
                                handlereset(0)
                            }}>Reset</button>
                        </div>
                    )
                    : (
                        <div className='col-md-6'>

                            <h1 className='hd mb-3 '>Timer</h1>
                           
                           {!isontimer ? (
                               <div>
                                    <h6 className='mb-3  '>
                                {/* <label htmlFor="one">Max can Select 2 days
                                </label><br/> */}

                                <select
                                    className="custom-select inp"
                                    id="inputGroupSelect01"
                                    onChange={(e : React.ChangeEvent < HTMLSelectElement >) => {
                                        handletimer(e, 0)}}>
                                    
                                    {arry.map((val,ind)=>{return(<option value={ind} key={val}>{ind}</option>)})}
                                    

                                </select>
                                
                                <label>Days</label>
                                <select
                                    className="custom-select inp"
                                    id="inputGroupSelect01"
                                    onChange={(e : React.ChangeEvent < HTMLSelectElement >) => {
                                        handletimer(e, 1)}}>
                                    
                                    {arryhour.map((val,ind)=>{return(<option value={ind} key={val}>{ind}</option>)})}

                                </select>
                                <label>Hour</label>
                                <select
                                    className="custom-select inp"
                                    id="inputGroupSelect01"
                                    onChange={(e : React.ChangeEvent < HTMLSelectElement >) => {
                                        handletimer(e, 2)}}>
                                    
                                    {arryminutes.map((val,ind)=>{return(<option value={ind} key={val}>{ind}</option>)})}

                                </select>
                                <label>Minutes</label>
                                <select
                                    className="custom-select inp"
                                    id="inputGroupSelect01"
                                    onChange={(e : React.ChangeEvent < HTMLSelectElement >) => {
                                        handletimer(e, 3)}}>
                                    
                                    {arryseconds.map((val,ind)=>{return(<option value={ind} key={val}>{ind}</option>)})}

                                </select>
                                <label>Seconds</label><br/>
                                
                            </h6>
                            <button className='btn  btn-outline-primary mb-3' onClick={handleset}>Set Timer</button>
                               </div>
                           ):null}
                            <h1 className='mb-5'>{Math.floor(countdown / (1 * 60 * 60 * 24))}
                                <span className='txt'>days</span>
                                :{Math.floor((countdown / (1 * 60 * 60)) % 24)}
                                <span className='txt'>hour</span>
                                :{Math.floor((countdown / 1 / 60) % 60)}
                                <span className='txt'>minutes</span>
                                :{Math.floor((countdown / 1) % 60)}
                                <span className='txt'>seconds</span>
                            </h1>
                            {isontimer
                                ? (
                                    <button
                                        className='btn btn-outline-danger mr-5'
                                        id='btn_stop'
                                        onClick={() => {
                                        handlestop(1)
                                    }}>Stop</button>
                                )
                                : (
                                    <button
                                        className='btn btn-outline-primary mr-4'
                                        onClick={() => {
                                        handleclick(1)
                                    }}>Start</button>
                                )}

                            <button
                                className='btn btn-outline-danger'
                                onClick={() => {
                                handlereset(1)
                            }}>Reset</button>
                        </div>
                    )}

            </div>
        </div>
    )
}

export default Timer