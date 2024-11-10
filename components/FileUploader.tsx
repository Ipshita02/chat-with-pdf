"use client";

import { useCallback, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import{
    CircleArrowDown,
    RocketIcon,
} from "lucide-react";
import useUpload from '../hooks/useUpload';
import { useRouter } from 'next/navigation';

function FileUploader() {
    const { progress, status, fileId, handleUpload } = useUpload();
    const router = useRouter();

    useEffect(() => {
        if (fileId) {
            router.push(`/dashboard/files/${fileId}`);
        }
    }, [fileId, router]);


    const onDrop = useCallback(async (acceptedFiles: File[]) => {

        const file = acceptedFiles[0];
        if (!file) {
            await handleUpload(file)
        }
      }, []);

      const {getRootProps, getInputProps, isDragActive, isFocused, isDragAccept} = useDropzone({
            onDrop,
            maxFiles: 1,
            accept: {
                "application/pdf": [".pdf"]
            }
        });
        
    return (
        <div className='flex flex-col gap-4 items-center max-w-7xl mx-auto'>            
            <div 
                {...getRootProps()}
                className={`p-10 border-2 border-dashed mt-10 w-[90%] border-indigo-600 text-indigo-600 
                    rounded-lg h-96 flex items-center text-center justify-center ${
                        isFocused || isDragAccept ? 'bg-indigo-300' : 'bg-indigo-100'
                    }`}
            >
            <input {...getInputProps()} />
            
            <div className='flex flex-col items-center justify-center'>
                {isDragActive ? (
                    <>
                        <RocketIcon className='h-20 w-20 animate-ping' />
                        <p>Drop the files here ...</p>
                    </>
                  ) : (
                    <>
                        <CircleArrowDown className='h-20 w-20 animate-bounce' />
                        <p>Drag and drop some files here, or click to select files</p>
                    </> 
                    
                )}
              </div>
            </div>
        </div>
    )
}
export default FileUploader;