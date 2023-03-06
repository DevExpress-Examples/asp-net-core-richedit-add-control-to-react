import React from 'react';
import './App.css';

import 'devextreme/dist/css/dx.light.css';
import 'devexpress-richedit/dist/dx.richedit.css';

import { create, createOptions, RichEdit, ViewType, RichEditUnit, DocumentFormat } from 'devexpress-richedit';

function App() {
  return (
    <RichEditComponent/>
  );
}

export default App;

class RichEditComponent extends React.Component {
  rich = null;

  componentDidMount() {
    if (this.rich)
      return;
    // the createOptions() method creates an object that contains RichEdit options initialized with default values
    const options = createOptions();

    options.bookmarks.visibility = true;
    options.bookmarks.color = '#ff0000';

    options.confirmOnLosingChanges.enabled = true;
    options.confirmOnLosingChanges.message = 'Are you sure you want to perform the action? All unsaved document data will be lost.';

    options.fields.updateFieldsBeforePrint = true;
    options.fields.updateFieldsOnPaste = true;

    options.mailMerge.activeRecord = 2;
    options.mailMerge.viewMergedData = true;
    options.mailMerge.dataSource = [
        { Name: 'Indy', age: 32 },
        { Name: 'Andy', age: 28 },
    ];

    // events
    options.events.activeSubDocumentChanged = () => { };
    options.events.autoCorrect = () => { };
    options.events.calculateDocumentVariable = () => { };
    options.events.characterPropertiesChanged = () => { };
    options.events.contentInserted = () => { };
    options.events.contentRemoved = () => { };
    options.events.documentChanged = () => { };
    options.events.documentFormatted = () => { };
    options.events.documentLoaded = () => { };
    options.events.gotFocus = () => { };
    options.events.hyperlinkClick = () => { };
    options.events.keyDown = () => { };
    options.events.keyUp = () => { };
    options.events.paragraphPropertiesChanged = () => { };
    options.events.lostFocus = () => { };
    options.events.pointerDown = () => { };
    options.events.pointerUp = () => { };
    options.events.saving = () => { };
    options.events.saved = () => { };
    options.events.selectionChanged = () => { };    
    options.events.customCommandExecuted = (s, e) => {
        switch (e.commandName) {
        case 'insertEmailSignature':
            s.document.insertParagraph(s.document.length);
            s.document.insertText(s.document.length, '_________');
            s.document.insertParagraph(s.document.length);
            s.document.insertText(s.document.length, 'Best regards,');
            s.document.insertParagraph(s.document.length);
            s.document.insertText(s.document.length, 'John Smith');
            s.document.insertParagraph(s.document.length);
            s.document.insertText(s.document.length, 'john@example.com');
            s.document.insertParagraph(s.document.length);
            s.document.insertText(s.document.length, '+1 (818) 844-0000');
            break;
        }
    };

    options.unit = RichEditUnit.Inch;

    options.view.viewType = ViewType.PrintLayout;
    options.view.simpleViewSettings.paddings = {
        left: 15,
        top: 15,
        right: 15,
        bottom: 15,
    };
    options.exportUrl = 'https://siteurl.com/api/';

    options.readOnly = false;
    options.width = '1400px';
    options.height = '900px';

    this.rich = create(document.getElementById("richEdit"), options);

    var documentAsBase64 = "e1xydGYxXGRlZmYwe1xmb250dGJse1xmMCBDYWxpYnJpO319e1xjb2xvcnRibCA7XHJlZDB"
        + "cZ3JlZW4wXGJsdWUyNTUgO1xyZWQyNTVcZ3JlZW4yNTVcYmx1ZTI1NSA7fXtcKlxkZWZjaHAgXGZzMjJ9e1xzdHl"
        + "sZXNoZWV0IHtccWxcZnMyMiBOb3JtYWw7fXtcKlxjczFcZnMyMiBEZWZhdWx0IFBhcmFncmFwaCBGb250O317XCp"
        + "cY3MyXGZzMjJcY2YxIEh5cGVybGluazt9e1wqXHRzM1x0c3Jvd2RcZnMyMlxxbFx0c3ZlcnRhbHRcdHNjZWxsY2J"
        + "wYXQyXHRzY2VsbHBjdDBcY2x0eGxydGIgTm9ybWFsIFRhYmxlO319e1wqXGxpc3RvdmVycmlkZXRhYmxlfXtcaW5"
        + "mb31cbm91aWNvbXBhdFxzcGx5dHduaW5lXGh0bWF1dHNwXGV4cHNocnRuXHNwbHRwZ3BhclxkZWZ0YWI3MjBcc2V"
        + "jdGRcbWFyZ2xzeG4xNDQwXG1hcmdyc3huMTQ0MFxtYXJndHN4bjE0NDBcbWFyZ2JzeG4xNDQwXGhlYWRlcnk3MjB"
        + "cZm9vdGVyeTcyMFxwZ3dzeG4xMjI0MFxwZ2hzeG4xNTg0MFxjb2xzMVxjb2xzeDcyMFxwYXJkXHBsYWluXHFse1x"
        + "mczIyXGNmMFxjczEgRG9jdW1lbnQgdGV4dH1cZnMyMlxjZjBccGFyfQ==";
    this.rich.openDocument(documentAsBase64, 'DocumentName', DocumentFormat.Rtf);
  }

  render() {
    return (
       <div id="richEdit"></div>
    );
 }
}