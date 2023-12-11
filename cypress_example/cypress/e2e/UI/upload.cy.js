describe('upload', () => {
    it('Single file upload', () => {

        cy.visit('http://the-internet.herokuapp.com/upload')

        cy.get('#file-upload').attachFile('test_upload.txt')
        cy.get('#file-submit').click()

        cy.wait(2000)

        cy.get('div.example>h3').should('have.text', 'File Uploaded!')
    })

    it('File upload rename', () => {

        cy.visit('http://the-internet.herokuapp.com/upload')

        cy.get('#file-upload').attachFile({ filePath: 'test_upload.txt', fileName: 'newTestFileName.txt' })
        cy.get('#file-submit').click()

        cy.wait(2000)

        cy.get('div.example>h3').should('have.text', 'File Uploaded!')
        cy.get('#uploaded-files').should('contain.text', 'Test')
    })

    it('File upload - drag and drop', () => {

        cy.visit('http://the-internet.herokuapp.com/upload')

        cy.get('#drag-drop-upload').attachFile('test_upload.txt', { subjectType: 'drag-n-drop' })
        cy.wait(2000)

        cy.get('#drag-drop-upload>.dz-preview>.dz-details>.dz-filename>span').should('contain.text', 'test')
    })

    it('Multiple file upload', () => {

        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')

        cy.get('#filesToUpload').attachFile(['test_upload.txt', 'new_testfile.txt'])
        cy.wait(2000)

        cy.get('#fileList>li:nth-child(2)').should('contain.text', 'txt')
    })
})