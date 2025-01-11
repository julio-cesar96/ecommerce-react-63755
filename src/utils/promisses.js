/* 

Estados de uma promise
1 - pending: operação em execução
2 - Fulfilled: opereção completa com sucesso
3 - rejected: operação que falhou

*/

// criando uma promise

const minhaPromise = new Promise((resolve, rejected) => {
    const sucesso = true;

    sucesso ? resolve("Operação bem sucessidade") : rejected("Operação com falha");
});


// promise com then, catch e finally
minhaPromise
    .then((resultado) => {
        console.log(resultado);
    })
    .catch((erro) => {
        console.log(erro);
    })
    .finally(() => {
        console.log("Operação finalizada");
    })

// promise usando async/await

const executarOperacao = async () => {
    try {
        const resultado = await minhaPromise;
        console.log(resultado);
    } catch (error) {
        console.log(error);
    } finally {
        console.log("Operação finalizada");
    }
}

executarOperacao();
