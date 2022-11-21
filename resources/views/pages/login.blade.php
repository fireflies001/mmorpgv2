<!DOCTYPE html>
<html lang="en">
<head>
    @include('layout.header')
    
</head>
<body>
    <main class="flex items-center flex-col justify-center h-screen bg-gray-100">
        
        <form class="">
            <div class="bg-white w-96 p-6 rounded shadow-sm">
                <div class="flex items-center justify-center mb-4">
                    <p class="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-600">PROJECT NEVERLAND</p>
                </div>
                <label for="username" class="text-gray-700">Username:</label>
                <input type="text" name="username" id="username" class="w-full py-2 bg-gray-50 text-gray-700 text-center mb-4">
                <label for="username" class="text-gray-700">password:</label>
                <input type="password" name="password" id="password" class="w-full py-2 bg-gray-50 text-gray-700 text-center mb-4">
                <button type="submit" class="bg-green-500 w-full text-gray-100 py-2 rounded hover:bg-green-600 transition-colors mb-4">Login</button>
                <div class="flex items-center justify-center">
                    <a href="#" class="text-1xl ">forgot password?</a>
                </div>
            </div>
        </form>
        <div class="text-right w-96 mt-5">
            <a href="/register" class="text-blue-900 underline">Don't have an account yet? Register now!</a>
        </div>
    </main>
    @include('layout.body')
</body>
</html>