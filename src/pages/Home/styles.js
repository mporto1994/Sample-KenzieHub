import styled from "styled-components";

export const HomeS = styled.div`
    
        /* opacity: ${(props)=>(props.tech?0.8:1)}; */
        width:320px;
    


    .TecnologiasDiv{
        background-color:var(--Grey-4);
        width:296px;
        padding:0px;
        /* height:100%; */
    }
        header{
        display:flex;
        padding:45px 12px;
        border-top:1px solid var(--Grey-3);
        border-bottom:1px solid var(--Grey-3);
        /* flex-direction:row; */
        /* justify-content:space-between; */

        h2{
            font-weight:700;
            font-size:18px;
            padding-bottom:15px
        }
        p{
            color:var(--Grey-1);
            font-weight:400;
            font-size:12px;
        }
    }

    .TecHeadDiv{
        width:100%;
        display:flex;
        justify-content:space-between;
        align-items:center;
        padding:0 0 20px 0;
        button {
            font-size:15px;
            font-weight:600;
            width:32px;
            height:32px;
            background-color:var(--Grey-3);
            border:none;
            border-radius:4px;
            color:var(--Grey-0)

        }
    }
    .TecBodyDiv{
        background-color:var(--Grey-3);
        width:100%;
        height:100%;
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        padding:22px 0;
        border-radius:4px;
        button{
            background-color:var(--Grey-4);
            div{
                display:flex;
                flex-direction:row;
                justify-content:space-between;
                align-items:center;
                padding:0 12px;

            }
            
        }
        button+button{
            margin-top:16px;
        }
    }
    .AddTechDiv{
        width:;
        height:;
        display:flex;
        
    }
    nav{
        padding:26px 13px 32px 13px;
        button{
            background-color:var(--Grey-3)
        }
    }

`