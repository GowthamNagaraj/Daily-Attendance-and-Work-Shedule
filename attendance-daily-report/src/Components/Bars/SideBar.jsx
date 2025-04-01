import React, { useEffect, useState } from 'react'
import { Link, NavLink, Route, Routes } from 'react-router-dom'
import AttendanceRecord from '../Pages/AttendanceRecord';
const menus = [
    // { id: 1, name: 'Dashboard',path:'/', icon: 'bi bi-speedometer2' },
    { id: 2, name: 'Attendance',path:'/', icon: 'bi bi-activity' },
    // { id: 3, name: 'Schedule',path:'/schedule', icon: 'bi bi-back' },
]

const SideBar = () => {

    const [responsiveView, setResponsiveView] = useState({
        isMobile: false,
        isTablet: false,
    });
    const [toggle, setToggle] = useState(true);
    const [hidden, setHidden] = useState(false);
    const [sidebarWidth, setSidebarWidth] = useState("15%")


    useEffect(()=>{
        ResponsiveViews()
        window.addEventListener('resize', function(){
            ResponsiveViews()
        })
        // if(window.location.pathname)
    },[])

    function ResponsiveViews(){
        console.log("toggle: ", toggle);
        
        if(window.innerWidth <= 770){
            setSidebarWidth("5%");

            setResponsiveView({
                isTablet: true,
                isMobile: false
            });
            setHidden(true)
            if(window.innerWidth <= 430){
                setResponsiveView({
                    isTablet: false,
                    isMobile: true
                });
                setSidebarWidth("100%");

                setHidden(true)
            }else{
                setResponsiveView({
                    isTablet: true,
                    isMobile: false
                });
                setToggle(true);
                setSidebarWidth("5%");

            }
          }else{
            setResponsiveView({
                isTablet: false,
                isMobile: false
            });
            setSidebarWidth("15%");

            setHidden(false)
          } 
    }


    /*------------------togle sidebar--------------------- */
    const toggleHandle = () => {
       if(toggle){
        setToggle(false);
        setResponsiveView({
            isTablet: true,
            isMobile: false
        })
        setSidebarWidth("5%")

       }else{
        setToggle(true);
        setResponsiveView({
            isTablet: false,
            isMobile: false
        })
        setSidebarWidth("15%")
       }
    }

  return (
    <div className="container-fluid">
        {/* sidebar */}
        <div 
        className='container' 
        style={{ 
            backgroundColor: '#C7D9DD', 
            transition: 'width 0.5s',
            width: sidebarWidth, 
            height:responsiveView.isMobile ? '50px' : '100vh',
            position: 'fixed',
            top:!responsiveView.isMobile ? 0 : '',
            left:0,
            bottom:0,
            zIndex: 999
        }}
        >
          <div className="row justify-content-end" hidden={hidden}>
              <button
                  type="button"
                  className="btn btn-dark"
                  style={{ width: 'auto', clipPath: 'circle()' }}
                  onClick={toggleHandle}
              >
                  {
                      toggle ? <i className="bi bi-list"></i> : <i className="bi bi-caret-right-fill"></i>
                  }
              </button>
          </div>
        <div className="row" style={{position: 'absolute',top:'25%',left:'25%',translate: responsiveView.isMobile ? '5vw -10%' : '-10% -25%'}}>
            <ul style={{display:'flex',justifyContent:'center',alignItems:'start',flexDirection:responsiveView.isMobile ? 'row' : 'column',margin: 'auto 0'}}>
                {
                    menus.map((list,index) => (
                        <li key={index} style={{listStyle: 'none',lineHeight: '20px',marginBottom: '30px',color:'#578FCA'}}> <i className={list.icon} style={{fontSize: responsiveView.isTablet |responsiveView.isMobile ? '3vw' : '1.5vw', marginRight: responsiveView.isMobile ? '50px':'10px'}}></i>
                            {
                                responsiveView.isTablet | responsiveView.isMobile ? '' : <NavLink to={list.path} style={{fontSize: '1.5vw',textDecoration:'none',color:'#578FCA'}}>{list.name}</NavLink>
                            }
                        </li>
                    ))
                }
            </ul>
        </div>
    </div>

    {/* main */}
    <div className="container-fluid"
        style={{
            background: '#ADB2D4',
            height: '100vh',
            width: !toggle | responsiveView.isTablet ? '95vw' : responsiveView.isMobile ? '100vw' : `calc(100vw - 15vw)`,
            position: 'absolute',
            top: 0,
            left: !toggle | responsiveView.isTablet ? '5%' : responsiveView.isMobile ? '0%' : '15%',
            transition: 'all 0.5s',
        }}
    >
        
        <Routes>
            <Route path='/' element={<AttendanceRecord />}/>
        </Routes>

    </div>
    </div>
  )
}

export default SideBar
