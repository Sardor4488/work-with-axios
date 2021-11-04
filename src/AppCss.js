import styled from "styled-components";
const AppCss = styled.div`
.logotip{
    width:85px;
border-radius:10px;
height: 70px;
 &:hover{

 }
}
.input{
    border-radius:5px 0 0 5px;
    overflow:hidden;
    box-shadow:none;
    outline: 0;
}
header{
    position:sticky;
    top:0;
}
.container_Fluid{
width: 100px;
display:flex;
height: 100vh;
}
.sidebar{
    width:350px;
    height:100%;
    overflow-y:auto;
    position:sticky;
    top:0;
    left:0;
}
.content{
    height:100vh;
    flex:1;
    overflow-y:auto;
}
`
export default AppCss;