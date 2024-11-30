
export default function Cartao({img, titulo, link}){
return(
    <div>
    <div className="BoxCartao">

      <div className="Cartao">
        <h2>{titulo}</h2>
        <img width={150} alt="" src={img}></img>
        <button onClick={()=>IrParaGit()}>VER NO GITHUB</button>
   
      </div>

    </div>
    </div>
)

function IrParaGit(){
    window.location.href=link;
}
}
