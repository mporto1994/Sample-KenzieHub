import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root{
    --Color-primary:#FF577F;
    --Color-primary-Focus:#FF427F;
    --Color-primary-Negative:#59323F;
    /* Greys */
    --Grey-4:#121214;
    --Grey-3:#212529;
    --Grey-2:#343841;
    --Grey-1:#868e96;
    --Grey-0:#f8f9fa;

    --Sucess:#3Fe864;
    --Negative:#e83f5b;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing:border-box;
        outline:0;
        font-family:Inter;
    }

    button {
        cursor:pointer;
        border-radius:4px;
        border:none;

    }

    a {
        text-decoration:none
    }
    h1{
        font-size:16px;
        color:var(--Color-primary);
        font-weight:bold;

    }
    input,select{
        background-color:var(--Grey-2);
        border-radius:3.2px;
        border:1px solid var(--Grey-0)
    }
    button,input,select{
        height:38.5px;
        width:264.66px;
    }
` 
export default GlobalStyle