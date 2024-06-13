import test, { expect } from "@playwright/test";
import PaginaLogin from "./page-objects/PaginaLogin";

test.describe("Pagina Inicial", () =>{
    test("Deve visitar a pagina inicial", async ({ page }) =>{
        const paginaLogin = new PaginaLogin(page)
        
        await paginaLogin.visitar()

        await paginaLogin.Login('teste@teste.com', '123123')

        await paginaLogin.LoginSuccess()
        // await page.goto("/")
        // await expect(page).toHaveTitle("Jornada Milhas");

        // const tituloPassagens = page.getByRole('heading', {name: 'Passagens'});
        // await expect(tituloPassagens).toBeVisible();
    });
});


// test.describe("Login", () =>{
//     test("Deve visitar a pagina de login", async ({ page }) =>{
//         await page.goto("/auth/login");
//         await expect(page).toHaveTitle("Jornada Milhas");

//         const login = page.getByText('LoginE-mailSenha ACESSAR');
//         await expect(login).toBeVisible();
//     });
// });