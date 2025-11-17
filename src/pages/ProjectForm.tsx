import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Button } from '@/components/ui/button'; 
import { Input } from '@/components/ui/input'; 
import { Textarea } from '@/components/ui/textarea'; 
import { Label } from '@/components/ui/label'; 


interface ProjectFormData {
  title: string;
  details: string;
  category: string;
  liveLink: string;
  sourceCode: string;
  image: string;
  avatar: string;
  tags: string;
  backendSourceCode: string;
  longDetails: string;
  author: string;
  password: string;
}

const ProjectForm: React.FC = () => {
  const [formData, setFormData] = useState<ProjectFormData>({
    title: '',
    details: '',
    category: '',
    liveLink: '',
    sourceCode: '',
    image: '',
    avatar: '',
    tags: '',
    backendSourceCode: '',
    longDetails: '',
    author: '',
    password: '',
  });

  const [message, setMessage] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessage('');

    try {
      console.log(formData);
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/projects/create`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log(`Response data: ${JSON.stringify(data)}`);
      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong.');
      }
      
      setMessage(data.message);
      setFormData({
        title: '',
        details: '',
        category: '',
        liveLink: '',
        sourceCode: '',
        image: '',
        avatar: '',
        tags: '',
        backendSourceCode: '',
        longDetails: '',
        author: '',
        password: '',
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setMessage(error instanceof Error ? error.message : 'An unexpected error occurred.');
    }
  };

  return (
    <div className=" p-8 max-w-7xl mx-auto mt-16 mb-10 ">
    {/* <div className="relative flex flex-col items-center justify-center min-h-screen bg-black text-white p-6"> */}
      <div className="max-w-3xl w-full mx-auto p-8 rounded-xl shadow-2xl bg-gray-900 border border-gray-700">
        <h2 className="text-4xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          Create New Project
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="form-group">
              <Label htmlFor="title" className="text-lg text-gray-300">Title*</Label>
              <Input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-500 focus:ring-purple-500 focus:border-purple-500"
                required
              />
            </div>

            <div className="form-group">
              <Label htmlFor="category" className="text-lg text-gray-300">Category*</Label>
              <Input
                type="text"
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-500 focus:ring-purple-500 focus:border-purple-500"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="form-group">
              <Label htmlFor="author" className="text-lg text-gray-300">Author*</Label>
              <Input
                type="text"
                id="author"
                name="author"
                value={formData.author}
                onChange={handleChange}
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-500 focus:ring-purple-500 focus:border-purple-500"
                required
              />
            </div>

            <div className="form-group">
              <Label htmlFor="sourceCode" className="text-lg text-gray-300">Source Code URL*</Label>
              <Input
                type="url"
                id="sourceCode"
                name="sourceCode"
                value={formData.sourceCode}
                onChange={handleChange}
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-500 focus:ring-purple-500 focus:border-purple-500"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="form-group">
              <Label htmlFor="image" className="text-lg text-gray-300">Image URL*</Label>
              <Input
                type="url"
                id="image"
                name="image"
                value={formData.image}
                onChange={handleChange}
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-500 focus:ring-purple-500 focus:border-purple-500"
                required
              />
            </div>

            <div className="form-group">
              <Label htmlFor="avatar" className="text-lg text-gray-300">Avatar URL*</Label>
              <Input
                type="url"
                id="avatar"
                name="avatar"
                value={formData.avatar}
                onChange={handleChange}
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-500 focus:ring-purple-500 focus:border-purple-500"
                required
              />
            </div>
          </div>

          <div className="form-group">
            <Label htmlFor="tags" className="text-lg text-gray-300">Tags (comma-separated)*</Label>
            <Input
              type="text"
              id="tags"
              name="tags"
              value={formData.tags}
              onChange={handleChange}
              className="bg-gray-800 border-gray-700 text-white placeholder-gray-500 focus:ring-purple-500 focus:border-purple-500"
              required
            />
          </div>

          <div className="form-group">
            <Label htmlFor="details" className="text-lg text-gray-300">Short Details*</Label>
            <Textarea
              id="details"
              name="details"
              value={formData.details}
              onChange={handleChange}
              className="bg-gray-800 border-gray-700 text-white placeholder-gray-500 focus:ring-purple-500 focus:border-purple-500"
              required
            />
          </div>

          <div className="form-group">
            <Label htmlFor="longDetails" className="text-lg text-gray-300">Long Details (Optional)</Label>
            <Textarea
              id="longDetails"
              name="longDetails"
              value={formData.longDetails}
              onChange={handleChange}
              className="bg-gray-800 border-gray-700 text-white placeholder-gray-500 focus:ring-purple-500 focus:border-purple-500"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="form-group">
              <Label htmlFor="liveLink" className="text-lg text-gray-300">Live Link (Optional)</Label>
              <Input
                type="url"
                id="liveLink"
                name="liveLink"
                value={formData.liveLink}
                onChange={handleChange}
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-500 focus:ring-purple-500 focus:border-purple-500"
              />
            </div>

            <div className="form-group">
              <Label htmlFor="backendSourceCode" className="text-lg text-gray-300">Backend Source Code (Optional)</Label>
              <Input
                type="url"
                id="backendSourceCode"
                name="backendSourceCode"
                value={formData.backendSourceCode}
                onChange={handleChange}
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-500 focus:ring-purple-500 focus:border-purple-500"
              />
            </div>
        </div>
        <div className="form-group">
            <Label htmlFor="password" className="text-lg text-gray-300">Password*</Label>
            <Input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="bg-gray-800 border-gray-700 text-white placeholder-gray-500 focus:ring-purple-500 focus:border-purple-500"
              required
            />  
          </div>

          <Button 
            type="submit" 
            className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold text-lg rounded-lg transition-all duration-300"
          >
            Create Project
          </Button>
        </form>
        {message && (
          <p className={`form-message mt-4 text-center ${message.includes('Error') ? 'text-red-400' : 'text-green-400'}`}>
            {message}
          </p>
        )}
      </div>
    {/* </div> */}
    </div>
  );
};

export default ProjectForm;