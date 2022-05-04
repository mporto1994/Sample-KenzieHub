import styled from "styled-components";

export const ChangePopup = styled.div`
    width:298px;
    height:274px;
    

    position:absolute;
    margin:auto;
    left: 0;
    right: 0;
    top:0;
    bottom:0;
    text-align: center;
    

    display:flex;
    justify-content:space-between;
    align-items:center;
    
    background-color:var(--Grey-3);
    color:var(--Grey-0);

    form {
        width:100%;
        height:100%;
        display:flex;
        flex-direction:column;
        justify-content:space-between;
        align-items:center;

        label{
            text-align:left;
            padding-left:16px;
            font-size:9.8px;
            input, select{
                margin-top:18px;
                color:var(--Grey-0);
                padding-left:13px;
            }
        }
        

}
       form button:first-child{
        /* background-color:var(--Color-primary-Negative); */
        /* margin-bottom:26.6px; */
        }
        form button:last-child{
        /* background-color:var(--Grey-1); */
        /* margin-bottom:26.6px; */
        }

    form div button {
        width:20px;
        height:20px;
    }
    form div{
        /* height:40px; */
        width:100%;
        padding:0 16px;
        /* display:flex; */
        /* align-items:center; */
        /* justify-content:space-between; */
        background-color:var(--Grey-2);
        h2{
            font-size:11.1px;
            font-weight:700;
        }
        button{
            background-color:var(--Grey-2);
            color:var(--Grey-1);
            margin:0;
            
        }
    }
    form .head{
        height:40px;
        display:flex;
        flex-direction:row;
        justify-content:space-between;
        align-items:center;
    }
    

    form .body{
        height:100%;
        display:flex;
        flex-direction:column;
        justify-content:space-around;
        align-items:center;
        background-color:var(--Grey-3);
        div{
            padding:0;
            display:flex;
            flex-direction:row;
            justify-content:space-around;
            align-items:center;
        }
        .TechnoDiv{
        display:flex;
        flex-direction:column;
        justify-content:space-around;
        align-content:space-around;
        align-items:flex-start;
        padding:0 8px;
        background-color:var(--Grey-3);

        h2{
            font-size:10px;
            font-weight:400;
            color:var(--Grey-0);
            margin-bottom:18px;
            background-color:var(--Grey-3);



        }
        p{
            width:264px;
            height:38px;
            display:flex;
            flex-direction:column;
            justify-content:space-around;
            align-content:space-around;
            align-items:flex-start;
            padding:0 15px;
            color:#868e96;
            font-weight:400;
            font-size:13px;
            border-radius:3.2px;
            border:none;
            background-color:var(--Grey-2);
        }
        
    }

    }
    .body div:last-child{
            background-color:var(--Grey-3);
        }



    form .delTech{
        background-color:var(--Color-primary-Negative);
        color:white;
        width:78px;
        height:38px;
    }
    .saveBut{
        background-color:var(--Grey-1);
        color:white;
        width:163px;
        height:38px;
    }
    form:last-child  {
        div:last-child{
            /* display:flex; */
            /* flex-direction:row; */
            /* justify-content:space-between; */
            /* align-items:center; */
        }
        
        

    }
    form select{
        border:none;
        color:#868e96;
        font-weight:400;
        font-size:13px;
        padding-right:15px;
        option{
            color:#868e96;
        font-weight:400;
        font-size:13px;
        padding-right:15px;
        }
    }
    
`
