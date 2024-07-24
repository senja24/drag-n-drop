'use client';

import { useRef } from 'react';

const FileDropzone = () => {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const dropzoneRef = useRef<HTMLDivElement>(null);
    const fileInfoRef = useRef<HTMLParagraphElement>(null);

    const handleFileChange = () => {
        if (fileInputRef.current && fileInputRef.current.files?.length) {
            updateDropzoneFileList(fileInputRef.current.files[0]);
        }
    };

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        dropzoneRef.current?.classList.add('dropzone--over');
    };

    const handleDragLeave = () => {
        dropzoneRef.current?.classList.remove('dropzone--over');
    };

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        if (fileInputRef.current && e.dataTransfer.files.length) {
            fileInputRef.current.files = e.dataTransfer.files;
            updateDropzoneFileList(e.dataTransfer.files[0]);
        }
        dropzoneRef.current?.classList.remove('dropzone--over');
    };

    const updateDropzoneFileList = (file: File) => {
        if (fileInfoRef.current) {
            fileInfoRef.current.innerHTML = `${file.name}, ${file.size} bytes`;
        }
    };

    const handleReset = () => {
        if (fileInfoRef.current) {
            fileInfoRef.current.innerHTML = 'No Files Selected';
        }
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (fileInputRef.current?.files?.[0]) {
            console.log(fileInputRef.current.files[0]);
        }
    };

    return (
        <form className="dropzone-box" onReset={handleReset} onSubmit={handleSubmit}>
            <h2>Upload and attach files</h2>
            <p>Click to upload or drag and drop</p>
            <div
                className="dropzone-area"
                ref={dropzoneRef}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDragEnd={handleDragLeave}
                onDrop={handleDrop}
            >
                <div className="file-upload-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" id="upload">
                        <path d="M5 10c-.6 0-1-.4-1-1 0-3.9 3.1-7 7-7 3 0 5.7 2 6.7 4.9.1.5-.1 1.1-.7 1.2-.5.2-1.1-.1-1.3-.6C15.1 5.4 13.2 4 11 4 8.2 4 6 6.2 6 9c0 .6-.4 1-1 1z"></path>
                        <path d="M18 18c-.6 0-1-.4-1-1s.4-1 1-1c2.2 0 4-1.8 4-4s-1.8-4-4-4c-.3 0-.7 0-1 .1-.5.1-1.1-.2-1.2-.7s.2-1.1.7-1.2c.5-.1 1-.2 1.5-.2 3.3 0 6 2.7 6 6s-2.7 6-6 6zM8 18H5c-.6 0-1-.4-1-1s.4-1 1-1h3c.6 0 1 .4 1 1s-.4 1-1 1z"></path>
                        <path d="M18 18h-2c-.6 0-1-.4-1-1s.4-1 1-1h2c.6 0 1 .4 1 1s-.4 1-1 1zM5 18c-2.8 0-5-2.2-5-5s2.2-5 5-5c.6 0 1 .4 1 1s-.4 1-1 1c-1.7 0-3 1.3-3 3s1.3 3 3 3c.6 0 1 .4 1 1s-.4 1-1 1zm7 4c-.6 0-1-.4-1-1V11c0-.6.4-1 1-1s1 .4 1 1v10c0 .6-.4 1-1 1z"></path>
                        <path d="M9 15c-.3 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l3-3c.4-.4 1-.4 1.4 0s.4 1 0 1.4l-3 3c-.2.2-.4.3-.7.3z"></path>
                        <path d="M15 15c-.3 0-.5-.1-.7-.3l-3-3c-.4-.4-.4-1 0-1.4s1-.4 1.4 0l3 3c.4.4.4 1 0 1.4-.2.2-.4.3-.7.3z"></path>
                    </svg>
                </div>
                <input
                    type="file"
                    required
                    id="upload-file"
                    name="uploaded-file"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                />
                <p className="file-info" ref={fileInfoRef}>No Files Selected</p>
            </div>
            <div className="dropzone-actions">
                <button type="reset">Cancel</button>
                <button id="submit-button" type="submit">Save</button>
            </div>
        </form>
    );
};

export default FileDropzone;
