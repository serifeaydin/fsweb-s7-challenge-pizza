describe("HomePage Testleri",()=>{
    it("Sayfa doğru şekilde yükleniyor", () => {
        // HomePage
        cy.visit("http://localhost:5173/");
    })
       
    it("Sayfada aciktim butonu,logo ve slogan mevcut", ()=>{
        cy.visit("http://localhost:5173/");
        cy.get(".aciktimButonu").should("exist");
        cy.get('.slogan').should('exist');
        cy.get('.text').should('exist');
    })
       
})

describe("OrderPage Testleri", () => {
    it("Sayfa doğru şekilde yükleniyor", () => {
        
        cy.visit("http://localhost:5173/OrderPage");

         // form elemanları var mı
         cy.get("#exampleSelect").should("exist"); //hamur seçimi
         cy.get(".malzeme").find("input[type='checkbox']").should("have.length", 13); // 13 adet malzeme checkbox'u
         cy.get(".quantity-group").find("button").should("have.length", 2); // Artı ve eksi butonları
         cy.get(".btn-warning").find("button").should("exist"); // Sipariş verme butonu
     })
     it("Hamur ve malzeme seçimi yapıldığında sipariş veriliyor", () => {
        
        cy.visit("http://localhost:5173/OrderPage");

        // Hamur seçimi yap
        cy.get("#exampleSelect").select("İnce"); // Örnek bir hamur seç
        // Malzeme seçimi yap
        cy.get(".malzeme").find("input[type='checkbox']").first().check(); // İlk malzemeyi seç
  
        cy.get(".btn-warning").find("button").should("be.enabled");
    });

})
describe("OrderPageReceived Testleri", () => {
    it("Sayfa doğru şekilde yükleniyor", () => {
        
        cy.visit("http://localhost:5173/Order-received");
    })
})

