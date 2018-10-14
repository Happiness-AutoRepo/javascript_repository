describe('rediff practice', () => {
    
    it('should output all laptop prices', () => {

        browser.waitForAngularEnabled(false);
        
        browser.get("http://shopping.rediff.com/categories/laptops/cat-7620/?sc_cid=ushome_icon|topnav_computers|browse");

        $$("span[itemprop = 'price']").getText().then((result) => {
           
            console.log(result);
        }).catch((err) => {
           
        });
    });
});