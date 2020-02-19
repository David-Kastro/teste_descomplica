import React from 'react';

function Personagem({nome, cor, removeAction}) {
  return (
    <div className="Personagem" style={{color: cor}}>
      <div className="name">
        {nome}
      </div>
      <button className="action" onClick={() => removeAction()}>
        Remover
      </button>
    </div>
  );
}

export default Personagem;
