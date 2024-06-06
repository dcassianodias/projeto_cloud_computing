function Formulario({botao, eventoTeclado, cadastrar, obj, cancelar, remover, atualizar}){
    return(
        <form>
            <input type="text" value={obj.nome} onChange={eventoTeclado} name='nome' placeholder="Nome" className="form-control"/>
            <input type="text" value={obj.descricao} onChange={eventoTeclado} name='descricao' placeholder="Descricao" className="form-control"/>
            <input type="text" value={obj.valor} onChange={eventoTeclado }name='valor' placeholder="Valor" className="form-control"/>

            {
                botao
                ?
                <input type='button' value='Cadastrar' onClick={cadastrar} className="btn btn-primary"/>
                :
                <div>
                    <input type='button' value='Alterar' onClick={atualizar} className="btn btn-warning"/>
                    <input type='button' value='Remover' onClick={remover} className="btn btn-danger"/>
                    <input type='button' value='Cancelar' onClick={cancelar} className="btn btn-secondary"/>
                </div>
            }           
        </form>
    )
}

export default Formulario;