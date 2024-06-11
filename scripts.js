class Controller {

    constructor() { 

        this.access = ""

        this.contentM = document.getElementById("contentM")
        this.initM = document.getElementById("initM")
        this.btnman = document.getElementById("btnman")

        this.contentW = document.getElementById("contentW")
        this.initW = document.getElementById("initW")
        this.btnwoman = document.getElementById("btnwoman")

        this.keyPass = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
        this.keyPass2 = ["a", "á", "b", "c", "d", "e", "é", "f", "g", "h", "i", "í", "j", "k", "l", "m", "n", "o", "ó", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "Á", "B", "C", "D", "E", "É", "F", "G", "H", "I", "Í", "J", "K", "L", "M", "N", "O", "Ó", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", " "]

        this.qtdM = 0
        this.qtdW = 0

        this.statusM = 0
        this.statusW = 0

        this.formCreateM()
        this.formCreateW()

        this.initialize()
        
    }

    formCreateM() {

        this.btnman.addEventListener('click', e => {

            if (this.statusW == 1) {

                this.returnInitWoman() 
            }

            if (this.statusM == 0) {

                this.statusM = 1

                this.initM.remove()

                this.formM = document.createElement("form")
                this.contentM.appendChild(this.formM)
                this.formM.setAttribute("id", "formM")
                this.formM.style.backgroundColor = "rgb(41, 38, 38)"
                this.formM.style.display = "flex"
                this.formM.style.flexDirection = "column"

                let titformM = document.createElement("h3")
                this.formM.appendChild(titformM)
                titformM.setAttribute("id", "titformM")
                titformM.innerHTML = "CADASTRO"
                titformM.style.fontFamily = "Franklin Gothic Medium"

                let subformM = document.createElement("p")
                this.formM.appendChild(subformM)
                subformM.innerHTML = "Aulas Masculinas"
                subformM.style.color = "#fff"
                subformM.style.fontFamily = "Franklin Gothic Medium"
                subformM.setAttribute("id", "subformM")

                let label1M = document.createElement("label")
                this.formM.appendChild(label1M)
                label1M.innerHTML = "NOME COMPLETO"
                label1M.setAttribute("for", "input1M")
                label1M.setAttribute("class", "labelM")

                let input1M = document.createElement("input")
                this.formM.appendChild(input1M)
                input1M.setAttribute("id", "input1M")

                let label2M = document.createElement("label")
                this.formM.appendChild(label2M)
                label2M.innerHTML = "EMAIL"
                label2M.setAttribute("for", "input2M")
                label2M.setAttribute("class", "labelM")

                let input2M = document.createElement("input")
                this.formM.appendChild(input2M)
                input2M.setAttribute("id", "input2M")

                let label3M = document.createElement("label")
                this.formM.appendChild(label3M)
                label3M.innerHTML = "SENHA"
                label3M.setAttribute("for", "input3M")
                label3M.setAttribute("class", "labelM")

                let input3M = document.createElement("input")
                this.formM.appendChild(input3M)
                input3M.setAttribute("id", "input3M")

                let validM = document.createElement("div")
                this.formM.appendChild(validM)
                validM.setAttribute("id", "validM")
                validM.style.width = "100%"
                

                let divbtnsM = document.createElement("div")
                this.formM.appendChild(divbtnsM)
                divbtnsM.style.width = "80%"
                divbtnsM.style.marginLeft = "auto"
                divbtnsM.style.marginRight = "auto"
                divbtnsM.setAttribute("id", "divbtnsM")
                divbtnsM.backgroundColor = "blue"
                divbtnsM.style.alignItems = "center"
                divbtnsM.style.justifyContent = "center"
                divbtnsM.style.display = "flex"
                divbtnsM.style.flexDirection = "row"

                this.btncadM = document.createElement("button")
                divbtnsM.appendChild(this.btncadM)
                this.btncadM.innerHTML = "ENVIAR"
                this.btncadM.style.backgroundColor = "rgb(41, 38, 38)"
                this.btncadM.setAttribute("id", "btncadM")
                this.btncadM.style.color = "#fff"
                this.btncadM.style.textAlign = "center"
                this.btncadM.setAttribute("type", "submit")

                this.btncancelM = document.createElement("button")
                divbtnsM.appendChild(this.btncancelM)
                this.btncancelM.innerHTML = "CANCELAR"
                this.btncancelM.style.backgroundColor = "rgb(41, 38, 38)"
                this.btncancelM.setAttribute("id", "btncancelM")
                this.btncancelM.style.color = "#fff"
                this.btncancelM.style.textAlign = "center"

                input1M.autocomplete = "off"
                input2M.autocomplete = "off"
                input3M.autocomplete = "off"

                this.submitM()
                this.cancelM()


            }
        
        })
    }

    submitM() {

        this.formM.addEventListener('submit', e => {

            e.preventDefault()

            let status = ""

            let inputs = document.querySelectorAll("input")
            
            inputs.forEach((item, index) => {

                if (!item.value) {

                    status = "block"
                }
                
            }) 

            if (!this.txtvalidM) {

                this.txtvalidM = document.createElement("p")
                validM.appendChild(this.txtvalidM)
                this.txtvalidM.setAttribute("id", "txtvalidM")
                this.txtvalidM.style.color = "red"
                this.txtvalidM.style.fontFamily = "Verdana"
            }
            
            
            if (status == "block") {

                this.removeCreateValidM()

                this.txtvalidM.innerHTML = "Por favor preencha todos os campos!"
            }
    
            else if (validM.textContent != "" && status == "block") return

            else if (status == "") { 

                this.removeCreateValidM()
                
                if (this.validName(inputs[0].value) == "no" && this.validEmail(inputs[1].value) == "no") {

                    this.txtvalidM.innerHTML = "NOME E EMAIL INVÁLIDOS"
                }

                else if (this.validName(inputs[0].value) == "no") {

                    this.txtvalidM.innerHTML = "NOME INVÁLIDO"
                }

                else if (this.validEmail(inputs[1].value) == "no") {

                    this.txtvalidM.innerHTML = "EMAIL INVÁLIDO"
                }

                else if(this.validPasswordOne(inputs[2].value) == "no") {

                    this.txtvalidM.innerHTML = "Sua senha deve conter ao menos 8 caracteres"
                }

                else if (this.validPasswordTwo(inputs[2].value, this.keyPass) == "no") {

                    this.txtvalidM.innerHTML = "Sua senha deve conter ao menos um número"
                }

                else if (this.validPasswordTwo(inputs[2].value, this.keyPass2) == "no") {

                    this.txtvalidM.innerHTML = "Sua senha deve conter ao menos uma letra"
                }

                else {

                    this.qtdM += 1
    
                    this.returnInitMan()
                     
               }                               
            }
    
        })      
    }

    cancelM() {

        this.btncancelM.addEventListener('click', e => {

            this.statusM = 0

            e.preventDefault()

            this.returnInitMan()
        })    
    }

    returnInitMan() {

        this.statusM = 0

        this.formM.remove()

        this.initM = document.createElement("div")
        this.contentM.appendChild(this.initM)
        this.initM.setAttribute("id", "initM")
                           
        this.subsecondM = document.createElement("h2") 
        this.initM.appendChild(this.subsecondM)
        this.subsecondM.setAttribute("class", "subsecond")
        this.subsecondM.innerHTML = "AULAS MASCULINAS"
           
        this.txtman = document.createElement("p")
        this.initM.appendChild(this.txtman)
        this.txtman.setAttribute("id", "txtman")
        this.txtman.innerHTML = "Desafie seus limites, construa sua força e defina um novo padrão para seu corpo. As aulas de academia para homens estão aqui para elevar seu treino a um novo patamar."
           
        this.btnman = document.createElement("a")
        this.initM.appendChild(this.btnman)
        this.btnman.setAttribute("id", "btnman")
        this.btnman.setAttribute("class", "now")
        this.btnman.innerHTML = "COMECE JÁ"
    
        this.btnman = document.getElementById("btnman")
    
        if (this.qtdM > 0) {
    
            this.adviseM = document.createElement("p")
            this.initM.appendChild(this.adviseM)
            this.adviseM.setAttribute("id", "adviseM")
            this.adviseM.style.color = "#fff"
    
            if (this.qtdM == 1) {
    
                this.adviseM.innerHTML = "Você já realizou " + this.qtdM + " cadastro aqui!"
            }
    
            else {
    
                this.adviseM.innerHTML = "Você já realizou " + this.qtdM + " cadastros aqui"
            }
    
            this.thankM = document.createElement("p")
            this.initM.appendChild(this.thankM)
            this.thankM.setAttribute("id", "thankM")
            this.thankM.innerHTML = "Obrigado por contar com a gente!"
            this.thankM.style.color = "#fff"
        }

        this.formCreateM()
        this.formCreateW()

    }

    removeCreateValidM() {

        this.txtvalidM.remove()
        this.txtvalidM = document.createElement("p")
        validM.appendChild(this.txtvalidM)
        this.txtvalidM.setAttribute("id", "txtvalidM")
        this.txtvalidM.style.color = "red"
        this.txtvalidM.style.fontFamily = "Verdana"

    }

    validEmail(value) {

        let keyM = [["@"], ["m"], ["a"], ["i"], ["l"], ["."], ["c"], ["o"]]
        let permission = []

        keyM.forEach((item, index) => {

            for (let i = 0; i < value.length; i++) {

                if (keyM[index].indexOf(value[i]) >= 0) {

                    permission[index] = "true"
                }
            }
        })

        for (let j = 0; j < 7; j++) {

            if (permission[j] != "true") {

                return "no"
            }
        }

        
    }

    validName(value) {

        for (let i = 0; i < value.length; i++) {

            if (this.keyPass2.indexOf(value[i]) === -1) {

                return "no"

            }    
        }
    }

    validPasswordOne(value) {

        if (value.length < 8) {

            return "no"
        }

        else {

            return "go"
        }
    }

    validPasswordTwo(value, key) {

        
        let permission = []

        for (let c = 0; c < value.length; c++) {

            permission[c] = key.indexOf(value[c])
        }

        for (let j = 0; j < permission.length; j++) {

            if (permission[j] > -1) {

                permission.push("pass")
            }
        }

        if (permission[permission.length-1] == "pass") {

            return "go"
        }

        else {

            return "no"
        }

    }

    formCreateW() {

        this.btnwoman.addEventListener('click', e => {

            if (this.statusM == 1) {

                this.returnInitMan() 
            }

            if (this.statusW == 0) {

                this.statusW = 1

                this.initW.remove()
    
                this.formW = document.createElement("form")
                this.contentW.appendChild(this.formW)
                this.formW.setAttribute("id", "formW")
                this.formW.style.backgroundColor = "rgb(41, 38, 38)"
                this.formW.style.display = "flex"
                this.formW.style.flexDirection = "column"
    
                let titformW = document.createElement("h3")
                this.formW.appendChild(titformW)
                titformW.setAttribute("id", "titformW")
                titformW.innerHTML = "CADASTRO"
                titformW.style.fontFamily = "Franklin Gothic Medium"
    
                let subformW = document.createElement("p")
                this.formW.appendChild(subformW)
                subformW.innerHTML = "Aulas Femininas"
                subformW.style.color = "#fff"
                subformW.style.fontFamily = "Franklin Gothic Medium"
                subformW.setAttribute("id", "subformW")
    
                let label1W = document.createElement("label")
                this.formW.appendChild(label1W)
                label1W.innerHTML = "NOME COMPLETO"
                label1W.setAttribute("for", "input1W")
                label1W.setAttribute("class", "labelW")
    
                let input1W = document.createElement("input")
                this.formW.appendChild(input1W)
                input1W.setAttribute("id", "input1W")
    
                let label2W = document.createElement("label")
                this.formW.appendChild(label2W)
                label2W.innerHTML = "EMAIL"
                label2W.setAttribute("for", "input2W")
                label2W.setAttribute("class", "labelW")
    
                let input2W = document.createElement("input")
                this.formW.appendChild(input2W)
                input2W.setAttribute("id", "input2W")
    
                let label3W = document.createElement("label")
                this.formW.appendChild(label3W)
                label3W.innerHTML = "SENHA"
                label3W.setAttribute("for", "input3W")
                label3W.setAttribute("class", "labelW")
    
                let input3W = document.createElement("input")
                this.formW.appendChild(input3W)
                input3W.setAttribute("id", "input3W")
    
                let validW = document.createElement("div")
                this.formW.appendChild(validW)
                validW.setAttribute("id", "validW")
                validW.style.width = "100%"
                
    
                let divbtnsW = document.createElement("div")
                this.formW.appendChild(divbtnsW)
                divbtnsW.style.width = "80%"
                divbtnsW.style.marginLeft = "auto"
                divbtnsW.style.marginRight = "auto"
                divbtnsW.setAttribute("id", "divbtnsW")
                divbtnsW.backgroundColor = "blue"
                divbtnsW.style.alignItems = "center"
                divbtnsW.style.justifyContent = "center"
                divbtnsW.style.display = "flex"
                divbtnsW.style.flexDirection = "row"

                let btncadW = document.createElement("button")
                divbtnsW.appendChild(btncadW)
                btncadW.innerHTML = "ENVIAR"
                btncadW.style.backgroundColor = "rgb(41, 38, 38)"
                btncadW.setAttribute("id", "btncadW")
                btncadW.style.color = "#fff"
                btncadW.style.textAlign = "center"
                btncadW.setAttribute("type", "submit")
    
                this.btncancelW = document.createElement("button")
                divbtnsW.appendChild(this.btncancelW)
                this.btncancelW.innerHTML = "CANCELAR"
                this.btncancelW.style.backgroundColor = "rgb(41, 38, 38)"
                this.btncancelW.setAttribute("id", "btncancelW")
                this.btncancelW.style.color = "#fff"
                this.btncancelW.style.textAlign = "center"
    
                input1W.autocomplete = "off"
                input2W.autocomplete = "off"
                input3W.autocomplete = "off"
    
                this.submitW()
                this.cancelW()
            }
            
        })
    }

    submitW() {

        this.formW.addEventListener('submit', e => {

            e.preventDefault()

            let status = ""

            let inputs = document.querySelectorAll("input")
            
            inputs.forEach((item, index) => {

                if (!item.value) {

                    status = "block"
                }
                
            }) 

            if (!this.txtvalidW) {

                this.txtvalidW = document.createElement("p")
                validW.appendChild(this.txtvalidW)
                this.txtvalidW.setAttribute("id", "txtvalidW")
                this.txtvalidW.style.color = "red"
                this.txtvalidW.style.fontFamily = "Verdana"
            }
            
            
            if (status == "block") {

                this.removeCreateValidW()

                this.txtvalidW.innerHTML = "Por favor preencha todos os campos!"
            }
    
            else if (validW.textContent != "" && status == "block") return

            else if (status == "") { 

                this.removeCreateValidW()
                
                if (this.validName(inputs[0].value) == "no" && this.validEmail(inputs[1].value) == "no") {

                    this.txtvalidW.innerHTML = "NOME E EMAIL INVÁLIDOS"
                }

                else if (this.validName(inputs[0].value) == "no") {

                    this.txtvalidW.innerHTML = "NOME INVÁLIDO"
                }

                else if (this.validEmail(inputs[1].value) == "no") {

                    this.txtvalidW.innerHTML = "EMAIL INVÁLIDO"
                }

                else if(this.validPasswordOne(inputs[2].value) == "no") {

                    this.txtvalidW.innerHTML = "Sua senha deve conter ao menos 8 caracteres"
                }

                else if (this.validPasswordTwo(inputs[2].value, this.keyPass) == "no") {

                    this.txtvalidW.innerHTML = "Sua senha deve conter ao menos um número"
                }

                else if (this.validPasswordTwo(inputs[2].value, this.keyPass2) == "no") {

                    this.txtvalidW.innerHTML = "Sua senha deve conter ao menos uma letra"
                }

                else {

                    this.qtdW += 1
    
                    this.returnInitWoman()
                     
               }                               
            }
    
        })      
    }

    cancelW() {

        this.btncancelW.addEventListener('click', e => {


            this.statusW = 0

            e.preventDefault()

            this.returnInitWoman()
        })    
    }

    removeCreateValidW() {

        this.txtvalidW.remove()
        this.txtvalidW = document.createElement("p")
        validW.appendChild(this.txtvalidW)
        this.txtvalidW.setAttribute("id", "txtvalidW")
        this.txtvalidW.style.color = "red"
        this.txtvalidW.style.fontFamily = "Verdana"

    }

    returnInitWoman() {

        this.statusW = 0

        this.formW.remove()

        this.initW = document.createElement("div")
        this.contentW.appendChild(this.initW)
        this.initW.setAttribute("id", "initW")
                           
        this.subsecondW = document.createElement("h2") 
        this.initW.appendChild(this.subsecondW)
        this.subsecondW.setAttribute("class", "subsecond")
        this.subsecondW.innerHTML = "AULAS MASCULINAS"
           
        this.txtwoman = document.createElement("p")
        this.initW.appendChild(this.txtwoman)
        this.txtwoman.setAttribute("id", "txtwoman")
        this.txtwoman.innerHTML = "Desafie seus limites, construa sua força e defina um novo padrão para seu corpo. As aulas de academia para homens estão aqui para elevar seu treino a um novo patamar."
           
        this.btnwoman = document.createElement("a")
        this.initW.appendChild(this.btnwoman)
        this.btnwoman.setAttribute("id", "btnwoman")
        this.btnwoman.setAttribute("class", "now")
        this.btnwoman.innerHTML = "COMECE JÁ"
    
        this.btnwoman = document.getElementById("btnwoman")
    
        if (this.qtdW > 0) {
    
            this.adviseW = document.createElement("p")
            this.initW.appendChild(this.adviseW)
            this.adviseW.setAttribute("id", "adviseW")
            this.adviseW.style.color = "#fff"
    
            if (this.qtdW == 1) {
    
                this.adviseW.innerHTML = "Você já realizou " + this.qtdW + " cadastro aqui!"
            }
    
            else {
    
                this.adviseW.innerHTML = "Você já realizou " + this.qtdW + " cadastros aqui"
            }
    
            this.thankW = document.createElement("p")
            this.initW.appendChild(this.thankW)
            this.thankW.setAttribute("id", "thankW")
            this.thankW.innerHTML = "Obrigado por contar com a gente!"
            this.thankW.style.color = "#fff"
        }

        this.formCreateW()
        this.formCreateM()

    }

    setHeaderColor() {

        this.sections = document.querySelectorAll("section");
        this.header = document.querySelector("header");

        window.addEventListener('scroll', () => {

            Array.from(this.sections).forEach(section => {

                let headerHeight = this.header.offsetHeight;
                let sectionTop = section.getBoundingClientRect().top;
                let sectionBottom = section.getBoundingClientRect().bottom;

                if ((headerHeight >= sectionTop) && (headerHeight <= sectionBottom)) {

                    let header = document.querySelector("header");
                    let sectionColor = window.getComputedStyle(section).backgroundColor;
                    
                    header.style.backgroundColor = sectionColor;
                }   
            })
        })
    }

    initialize() {

        this.setHeaderColor();

    }
}

let form = new Controller()

