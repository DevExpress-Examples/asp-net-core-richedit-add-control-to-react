import React from 'react';
import './App.css';

import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import 'devexpress-richedit/dist/dx.richedit.css';

import { create, createOptions, RichEdit, ViewType } from 'devexpress-richedit';
import { RichEditUnit } from 'devexpress-richedit/lib/base-utils/base-utils/unit-converter';

function App() {
  return (
    <RichEditComponent/>
  );
}

export default App;

class RichEditComponent extends React.Component {
  rich = RichEdit;

  componentDidMount() {
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
    options.height = '800px';

    this.rich = create(document.getElementById("richEdit"), options);
  }

  render() {
    return (
       <div id="richEdit"></div>
    );
 }
}
