### Explicação do código

1. **Importações e Estado**:
   - Importamos `useState` do React para gerenciar o estado do componente.
   - Criamos dois estados:
     - `clickCount`: armazena o número de cliques.
     - `lastClickTime`: armazena a data/hora do último clique.

2. **Função `handleClick`**:
   - É executada toda vez que o botão é clicado.
   - Incrementa o contador de cliques com `setClickCount`.
   - Atualiza o estado `lastClickTime` com a data/hora atual formatada usando `toLocaleString()`.

3. **Renderização**:
   - Mostramos o número de cliques e a data/hora do último clique na interface.
   - Se o usuário ainda não clicou, exibimos a mensagem "Nenhum clique registrado" para `lastClickTime`.

4. **Botão com Evento**:
   - O botão possui o evento `onClick`, que chama a função `handleClick` ao ser pressionado.

---

### Resultado esperado
- Ao abrir o componente, será exibido:
  ```
  Você clicou 0 vezes.
  Último clique: Nenhum clique registrado.
  ```

- Após clicar no botão, o número de cliques e a data/hora do último clique serão atualizados dinamicamente.
