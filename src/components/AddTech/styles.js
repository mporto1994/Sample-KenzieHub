import styled from "styled-components";

export const AddPopup = styled.div`
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
       form button{
        background-color:var(--Color-primary);
        margin-bottom:26.6px;
    }
    form div button {
        width:20px;
        height:20px;
    }
    form div{
        height:40px;
        width:100%;
        padding:0 16px;
        display:flex;
        align-items:center;
        justify-content:space-between;
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


`