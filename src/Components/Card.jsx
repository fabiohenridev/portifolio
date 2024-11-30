
export default function Cartao({img, titulo, link, button}){
return(
    <div>
    <div className="BoxCartao">

      <div className="Cartao">
        <h2>{titulo}</h2>
        <img width={150} alt="" src={img}></img>
        <button onClick={()=>IrParaGit()}>{button}</button>
   
      </div>

    </div>
    </div>
)

function IrParaGit(){
    window.location.href=link;
}
}
