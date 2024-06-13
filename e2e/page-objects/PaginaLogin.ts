import { Locator, Page, expect } from "@playwright/test";

export default class PaginaLogin{
    private readonly page: Page;
    private readonly botaoLogin: Locator;
    private readonly inputSenha: Locator;
    private readonly inputEmail: Locator;
    private readonly botaoAcessarConta: Locator;

    constructor(page:Page){
        this.page = page;
        this.botaoLogin = page.getByTestId('botao-login')
        this.inputSenha = page.getByTestId('input-senha')
        this.inputEmail = page.getByTestId('input-email')
        this.botaoAcessarConta = page.getByTestId('botao-acessar-conta')
    }

    async visitar(){
        await this.page.goto('/')
        await this.botaoLogin.click()
        await expect(this.page).toHaveURL('/auth/login')
    }

    async Login(email: string, senha: string){
        await this.inputEmail.fill(email)
        await this.inputSenha.fill(senha)
        await this.botaoAcessarConta.click()
    }

    async LoginSuccess(){
        await expect(this.page).toHaveURL('/home')
    }
}