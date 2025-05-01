import React from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Box, Paper, Typography, Button } from "@material-ui/core";

interface EditorProps {
  initialContent?: string;
  onChange?: (html: string) => void;
}

const Editor: React.FC<EditorProps> = ({ initialContent = "", onChange }) => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: initialContent,
    onUpdate: ({ editor }: { editor: TiptapEditor }) => {
      // Call onChange with the HTML content whenever it changes
      if (onChange) {
        onChange(editor.getHTML());
      }
    },
  });

  if (!editor) {
    return <Box>Loading editor...</Box>;
  }

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Username: {/* //TODO: ADD userName here */}
      </Typography>
      <Paper elevation={2} style={{ height: "70vh", padding: 20 }}>
        <Box display={"flex"} flexDirection={"column"} height={"100%"} p={2}>
          <Box mb={2} display="flex" style={{ gap: 15 }}>
            <Button
              variant="outlined"
              size="small"
              onClick={() => editor.chain().focus().toggleBold().run()}
              style={{
                fontWeight: editor.isActive("bold") ? "bold" : "normal",
              }}
            >
              Bold
            </Button>
            <Button
              variant="outlined"
              size="small"
              onClick={() => editor.chain().focus().toggleItalic().run()}
              style={{
                fontStyle: editor.isActive("italic") ? "italic" : "normal",
              }}
            >
              Italic
            </Button>
            <Button
              variant="outlined"
              size="small"
              onClick={() => editor.chain().focus().toggleBulletList().run()}
              color={editor.isActive("bulletList") ? "primary" : "default"}
            >
              Bullet List
            </Button>
          </Box>
          <EditorContent editor={editor} style={{ flexGrow: 1 }} />
        </Box>
      </Paper>
    </Box>
  );
};

export default Editor;
