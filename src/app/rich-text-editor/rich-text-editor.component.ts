import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-rich-text-editor',
  templateUrl: './rich-text-editor.component.html',
  styleUrls: ['./rich-text-editor.component.scss']
})

export class RichTextEditorComponent implements OnInit {

  public content : any;

  public textErra: any = "Hello";

  @Output() editorContent = new EventEmitter<JSON>();

  constructor() { }

  ngOnInit(): void {
  }

  public emitContent(content: JSON) {
    this.editorContent.emit(content)
  }

  quillConfig: any = {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'],
      ['blockquote', 'code-block'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      [{ color: [] }, { background: [] }],
      ['link'],
      ['clean'],
    ],
  }

  contentChanged(event: any) {
    this.editorContent.emit(event)
  }

}
