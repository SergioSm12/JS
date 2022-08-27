const incomes = [
  new Income("Salary", 4500000),
  new Income("Motorcicle Sale", 5000000),
];

const outflows = [
  new Outflow("Lease", 1000000),
  new Outflow("Services", 250000),
];

let upploadAccounting = () => {
  loadHead();
  uploadIncome();
  uploadOutflows();
  addData();
};

let totalIncomes = () => {
  let totalIncome = 0;
  for (let income of incomes) {
    totalIncome += income.value;
  }
  return totalIncome;
};

let totalExpenses = () => {
  let totalExpense = 0;
  for (let expense of outflows) {
    totalExpense += expense.value;
  }
  return totalExpense;
};

let loadHead = () => {
  let totalBudget = totalIncomes() - totalExpenses();
  let percentage = totalExpenses() / totalIncomes();
  document.getElementById("budget").innerHTML = currencyFormat(totalBudget);
  document.getElementById("income").innerHTML = currencyFormat(totalIncomes());
  document.getElementById("outflows").innerHTML = currencyFormat(totalExpenses());
  document.getElementById("percentage").innerHTML = percentageFormat(percentage);
};

const currencyFormat = (value) => {
  return value.toLocaleString("es-CO", {
    style: "currency",
    currency: "COP",
    minimunFractionDigits: 2,
  });
};

const percentageFormat = (value)=>{
  return value.toLocaleString("es-CO",{
   style:"percent",
   minimunFractionDigits:2,
  });
};

const uploadIncome= ()=>{
    let incomeHTML=" ";

    for(let income of incomes){
        incomeHTML += createIncome(income);
    }
    document.getElementById('income-list').innerHTML=incomeHTML;
};

const createIncome=(income)=>{
     let incomeHTML =`
     <div class="elemento limpiarEstilos">
     <div class="elemento_descripcion">${income.description}</div>
     <div class="derecha limpiarEstilos">
       <div class="elemento_valor">${currencyFormat(income.value)}</div>
       <div class="elemento_porcentaje">${percentageFormat(income.value/totalIncomes())}</div>
       <div class="elemento_eliminar">
         <button class="elemento_eliminar--btn">
           <ion-icon name="trash-outline" onclick='eliminateIncome(${income.id})'></ion-icon>
         </button>
       </div>
     </div>
     </div>
     `;
     return incomeHTML;
};

const eliminateIncome=(id)=>{
    let indexDelete =incomes.findIndex(income=> income.id === id);
    incomes.splice(indexDelete,1);
    loadHead();
    uploadIncome();
}

const uploadOutflows= ()=>{
    let expenseHTML="";

    for (let expense of outflows){
        expenseHTML += createExpense(expense);
    }
    document.getElementById('list-expenses').innerHTML=expenseHTML; 
};

const createExpense=(outflow)=>{
    let outflowHTML = `
    <div class="elemento limpiarEstilos">
    <div class="elemento_descripcion">${outflow.description}</div>
    <div class="derecha limpiarEstilos">
      <div class="elemento_valor">-${currencyFormat(outflow.value)}</div>
      <div class="elemento_porcentaje">${percentageFormat(outflow.value/totalExpenses())}</div>
      <div class="elemento_eliminar">
        <button class="elemento_eliminar--btn">
          <ion-icon name="trash-outline" onclick='eliminateOutflows()'></ion-icon>
        </button>
      </div>
    </div>
   </div>
    `;
    return outflowHTML;
};

const eliminateOutflows= (id)=>{
    let indexDelete = outflows.findIndex(expense => expense.id === id );
    outflows.splice(indexDelete, 1);
    loadHead();
    uploadOutflows();
}

let addData = ()=>{
    let form = document.forms['form'];
    let type = form['type'];
    let description = form['description'];
    let  value = form['value'];

    if(description.value !== ' ' && value.value !== ''){
      if(type.value == 'Income'){
        incomes.push( new Income(description.value, +value.value));
        loadHead();
        uploadIncome();
      }else if(type.value === 'Outflow'){
          outflows.push( new Outflow(description.value, +value.value));
          loadHead();
          uploadOutflows();  
      }
    }
}
 

