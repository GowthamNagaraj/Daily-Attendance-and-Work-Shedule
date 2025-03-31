import React, { useEffect, useState } from 'react'

const SideBar = () => {

    const [responsiveView, setResponsiveView] = useState({
        isMobile: false,
        isTablet: false,
    });
    const [toggle, setToggle] = useState(true);
    const [hidden, setHidden] = useState(false)

    useEffect(()=>{
        ResponsiveViews()
        window.addEventListener('resize', function(){
            ResponsiveViews()
        })
    },[])

    function ResponsiveViews(){
        console.log("toggle: ", toggle);
        
        if(window.innerWidth <= 770){
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
                setHidden(true)
            }else{
                setResponsiveView({
                    isTablet: true,
                    isMobile: false
                });
                setToggle(true);
            }
          }else{
            setResponsiveView({
                isTablet: false,
                isMobile: false
            });
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
       }else{
        setToggle(true);
        setResponsiveView({
            isTablet: false,
            isMobile: false
        })
       }
    }

  return (
    <div 
        className='container' 
        style={{ 
            backgroundColor: 'lightblue', 
            padding: '20px',
            transition: 'width 0.5s',
            width: responsiveView.isTablet ? '7%': responsiveView.isMobile ? '100%' : '15%', 
            height:'auto',
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
    </div>
  )
}

export default SideBar
