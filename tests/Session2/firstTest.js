import { Selector } from 'testcafe';

fixture `MyFixture`
    .page `https://google.com/`;

test
    ('My test', async t => {
        const searchField = Selector("input[name='text']");
        const searchBtn = Selector("button[type='submit']");
        const link = Selector("a[class*='link']")
                        .child('b')
                        .withText('fispan.com');
        const elementWithText = Selector("[class='f-left'] h2")
        
        await t
            .maximizeWindow()
            .click(searchField)
            .typeText(searchField, 'FispaN')
            .click(searchBtn)
            .click(link)
            .expect(elementWithText.textContent).eql('The future of commercial banking is integrated')


        console.log("My first test")        
    });
