// Python Projects Data
const pythonProjects = [
    {
        id: 1,
        name: "Line Genrator",
        description: "A Python script using BeautifulSoup and requests to scrape data from websites. This project demonstrates web scraping techniques, handling HTTP requests, and parsing HTML content.",
        codeSnippet: `

import tkinter as tk
from tkinter import ttk, messagebox
import random

class PickupLineApp:
    def __init__(self, root):
        """
        Initialize the PickupLineApp.

        Args:
            root (tk.Tk): The root window.
        """
        self.root = root
        self.root.title("Advanced Pickup Line Generator")
        self.root.geometry("600x500")
        self.root.config(bg="#2E3440")
        self.root.resizable(False, False)

        # Define pickup lines by category
        self.pickup_lines = {
            "Cheesy": [
                "Are you a magician? Because whenever I look at you, everyone else disappears.",
                "Do you have a name, or can I call you mine?",
                "Are you French? Because Eiffel for you.",
                "On a scale of 1 to America, how free are you tonight?",
                "Are you a parking ticket? Because you've got 'FINE' written all over you.",
                "Do you believe in love at first sight, or should I walk by again?",
                "Are you a bank loan? Because you have my interest.",
                "If you were a vegetable, you'd be a cute-cumber.",
                "Are you Australian? Because when I look at you, I feel like I'm down under.",
                "Do you have a map? Because I just got lost in your eyes."
            ],
            "Flirty": [
                "Are you into tricks or treats? Because I can do both.",
                "I’m not an electrician, but I can light up your day.",
                "Do you have a name you want me to save you as in my phone or should I just put “mine”?",
                "Do you believe in love at first swipe, or should I match with you again?",
                "Maybe we should take a workout class together so you won’t keep running through my mind.",
                "Let’s play a game! If I win, you take me out. If you win, I take you out. 🏆",
                "Are you Siri? Because you autocomplete me.",
                "Are you a camera? Because every time I look at you, I smile.",
                "Are you an artist? Because you’re really good at drawing me in.",
                "Is your name Wi-Fi? Because I'm really feeling a connection."
            ],
            "Funny": [
                "Are you a beaver? Because daaaaam.",
                "Do you like Star Wars? Because Yoda one for me!",
                "Are you a campfire? Because you’re hot and I want s’more.",
                "On a scale of 1 to 10, you're a 9... because I'm the 1 you need.",
                "Are you a time traveler? Because I can see you in my future.",
                "Do you have a Band-Aid? Because I just scraped my knee falling for you.",
                "Are you a library book? Because I can't stop checking you out.",
                "If you were a fruit, you'd be a fine-apple.",
                "Are you a cat? Because you're purr-fect.",
                "Do you like raisins? How do you feel about a date?"
            ],
            "Romantic": [
                "You must be a shooting star because I wished for someone like you.",
                "Every moment with you is like a treasure I hold dear.",
                "In your eyes, I see the universe unfolding.",
                "You are the melody that my heart sings to.",
                "With you, every day feels like a beautiful sunrise.",
                "Your smile lights up my world like the sun.",
                "I fall for you more every single day.",
                "You make my heart skip a beat every time I see you.",
                "Being with you feels like home.",
                "You are my everything, my love, my life."
            ]
        }

        self.current_line = ""
        self.setup_ui()

    def setup_ui(self):
        """Set up the user interface components."""
        # Main frame
        main_frame = tk.Frame(self.root, bg="#2E3440")
        main_frame.pack(fill=tk.BOTH, expand=True, padx=20, pady=20)

        # Title label
        title_label = tk.Label(main_frame, text="Pickup Line Generator",
                               font=("Helvetica", 24, "bold"), bg="#2E3440", fg="#ECEFF4")
        title_label.pack(pady=(0, 20))

        # Category selection frame
        category_frame = tk.Frame(main_frame, bg="#2E3440")
        category_frame.pack(pady=(0, 20))

        category_label = tk.Label(category_frame, text="Select Category:",
                                  font=("Helvetica", 14), bg="#2E3440", fg="#ECEFF4")
        category_label.pack(side=tk.LEFT, padx=(0, 10))

        self.category_var = tk.StringVar(value="Flirty")
        category_combo = ttk.Combobox(category_frame, textvariable=self.category_var,
                                      values=list(self.pickup_lines.keys()),
                                      state="readonly", font=("Helvetica", 12))
        category_combo.pack(side=tk.LEFT)
        category_combo.bind("<<ComboboxSelected>>", self.on_category_change)

        # Display frame
        display_frame = tk.Frame(main_frame, bg="#434C5E", relief=tk.RIDGE, bd=2)
        display_frame.pack(fill=tk.X, pady=(0, 20))

        self.line_label = tk.Label(display_frame, text="Click 'Generate' to get a pickup line!",
                                   font=("Helvetica", 16), bg="#434C5E", fg="#ECEFF4",
                                   wraplength=500, justify=tk.CENTER)
        self.line_label.pack(pady=20, padx=20)

        # Button frame
        button_frame = tk.Frame(main_frame, bg="#2E3440")
        button_frame.pack(pady=(0, 20))

        generate_button = tk.Button(button_frame, text="Generate Line",
                                    command=self.generate_line, font=("Helvetica", 14, "bold"),
                                    bg="#5E81AC", fg="#ECEFF4", activebackground="#81A1C1",
                                    relief=tk.RAISED, bd=3, padx=20, pady=10)
        generate_button.pack(side=tk.LEFT, padx=(0, 10))

        copy_button = tk.Button(button_frame, text="Copy to Clipboard",
                                command=self.copy_to_clipboard, font=("Helvetica", 14, "bold"),
                                bg="#A3BE8C", fg="#2E3440", activebackground="#B48EAD",
                                relief=tk.RAISED, bd=3, padx=20, pady=10, state=tk.DISABLED)
        copy_button.pack(side=tk.LEFT)
        self.copy_button = copy_button

        # Footer
        footer_label = tk.Label(main_frame, text="Made with ❤️ by SPYCODER",
                                font=("Helvetica", 10), bg="#2E3440", fg="#D08770")
        footer_label.pack(side=tk.BOTTOM, pady=(20, 0))

    def on_category_change(self, event=None):
        """Handle category selection change."""
        self.line_label.config(text="Click 'Generate' to get a pickup line!")
        self.current_line = ""
        self.copy_button.config(state=tk.DISABLED)

    def generate_line(self):
        """Generate a random pickup line from the selected category."""
        category = self.category_var.get()
        if category in self.pickup_lines:
            self.current_line = random.choice(self.pickup_lines[category])
            self.line_label.config(text=self.current_line)
            self.copy_button.config(state=tk.NORMAL)
        else:
            messagebox.showerror("Error", "Invalid category selected.")

    def copy_to_clipboard(self):
        """Copy the current pickup line to the clipboard."""
        if self.current_line:
            self.root.clipboard_clear()
            self.root.clipboard_append(self.current_line)
            messagebox.showinfo("Copied", "Pickup line copied to clipboard!")
        else:
            messagebox.showwarning("Warning", "No line to copy. Generate a line first.")

if __name__ == "__main__":
    root = tk.Tk()
    app = PickupLineApp(root)
    root.mainloop()

        `,
        images: ["assets/project/python.1.png"]
    },
    {
        id: 2,
        name: "Creative Design-1",
        description: "A data analysis tool built with Pandas and Matplotlib. This project loads CSV data, performs statistical analysis, and generates visualizations to uncover insights from datasets.",
        codeSnippet: `
import turtle

colors = ['yellow','green','red','white','cyan','blue']

t = turtle.Turtle()
screen = turtle.Screen()
screen.bgcolor('black')
t.speed(30)

for i in range (100):                 # range will be change
    t.color(colors[i%6])              # this is color effect (i%6)
    t.fd(i*5)                         # size will be change
    t.left(80)                        # change this degree in anywhere
    t.width(2)
        `,
        images: ["assets/project/python.2.png"]
    },
    {
        id: 3,
        name: "Heart Design-1",
        description: "An automation script using Python's os and shutil modules to organize files. This project automates repetitive file management tasks, improving productivity.",
        codeSnippet: `

        import math
        from turtle import *
            
        def hearta(k):
            return 15*math.sin(k)**3
            
        def heartb(k):
            return 12*math.cos(k)-5*\\math.cos(2*k)-2*\\math.cos(3*k)-\\math.cos(4+k)
        speed(1000000)
        bgcolor("black")
        for i in range(6000):
            goto(hearta(i)*20,heartb(i)*20)
            for j in range(5):
                color("#f73487")
            goto(0,0)     
        done()    

        `,
        images: ["assets/project/python.3.png"]
    },
    {
        id: 4,
        name: "Creative Design-2",
        description: "An automation script using Python's os and shutil modules to organize files. This project automates repetitive file management tasks, improving productivity.",
        codeSnippet: `

import turtle as t
import colorsys

t.width(3)
t.tracer(10)
t.bgcolor('black')
h=0
N = 50

for i in range (150):
    c = colorsys.hsv_to_rgb(h,1,0.8)
    h+= 1/N
    t.pencolor(c)
    t.circle(i,1)
    t.right(691)
    t.circle(i,270)
    t.forward(i)
    t.right(97)
t.done()   

        `,
        images: ["assets/project/python.4.png"]
    },
    {
        id: 5,
        name: "Heart Design-2",
        description: "An automation script using Python's os and shutil modules to organize files. This project automates repetitive file management tasks, improving productivity.",
        codeSnippet: `

import turtle
from turtle import *

wn = Screen()
wn.bgcolor("black")

t = turtle.Turtle()
t.pencolor('white')

def curve():
    for i in range(200):
        t.rt(1)
        t.fd(1)

def heart():
    t.fillcolor("red")
    t.begin_fill()
    t.lt(140)
    t.fd(113)
    curve()
    t.lt(120)
    curve()
    t.fd(112)
    t.end_fill()

heart()
t.ht()

def write(message,pos):
    x, y=pos
    t.penup()
    t.goto(x,y)
    t.color('white')
    t.write(message, font=("Arial", 18, "italic"))

write('I LOVE INDIA',(-68,95))

wn.mainloop()
  

        `,
        images: ["assets/project/python.5.png"]
    },
    {
        id: 6,
        name: "Flower Design",
        description: "An automation script using Python's os and shutil modules to organize files. This project automates repetitive file management tasks, improving productivity.",
        codeSnippet: `

from turtle import *
import colorsys

speed(0)
bgcolor("black")
h=0

for i in range(16):
   for j in range(18):
      c = colorsys.hsv_to_rgb(h,1,1)
      color(c)
      h += 0.005
      rt(90)
      circle(150 - j * 6, 90)
      lt(90)
      circle(150 - j * 6, 90)
      rt(180)
   circle(40,24) 
done()   

        `,
        images: ["assets/project/python.6.png"]
    },
    {
        id: 7,
        name: "Creative Design-3",
        description: "An automation script using Python's os and shutil modules to organize files. This project automates repetitive file management tasks, improving productivity.",
        codeSnippet: `

import turtle as t

t.speed(0)
t.bgcolor('black')
t.pencolor('red')

for i in range (160):
    t.right(i)
    t.circle(125,i)
    t.forward(i)
    t.right(90)

t.done()  

        `,
        images: ["assets/project/python.7.png"]
    },
    {
        id: 8,
        name: "Creative Design-4",
        description: "An automation script using Python's os and shutil modules to organize files. This project automates repetitive file management tasks, improving productivity.",
        codeSnippet: `

import turtle
turtle.bgcolor("black")

squary = turtle.Turtle()
squary.speed(20)
squary.pencolor("red")
for i in range(800):
    squary.forward(i)
    squary.left(91)

        `,
        images: ["assets/project/python.8.png"]
    },
    {
        id: 9,
        name: "Creative Design-5",
        description: "An automation script using Python's os and shutil modules to organize files. This project automates repetitive file management tasks, improving productivity.",
        codeSnippet: `

from turtle import*
import colorsys

speed(0)
hideturtle()
bgcolor('black')
tracer(5)
width(2)
h = 0.001
for i in range(90):
    color(colorsys.hsv_to_rgb(h,1,1))
    forward(100)
    left(60)
    forward(100)
    right(120)
    circle(50)
    left(240)
    forward(100)
    left(60)
    forward(100)
    h += 0.02 
    color(colorsys.hsv_to_rgb(h,1,1))
    forward(100)
    right(60)
    forward(100)
    left(120)
    circle(-50)
    right(240)
    forward(100)
    right(60)
    forward(100)
    left(2)
    h += 0.02
done()

        `,
        images: ["assets/project/python.9.1.png","assets/project/python.9.2.png"]
    },
    {
        id: 10,
        name: "Creative Design-6",
        description: "An automation script using Python's os and shutil modules to organize files. This project automates repetitive file management tasks, improving productivity.",
        codeSnippet: `

import turtle
t  = turtle.Turtle()
screen = turtle.Screen()
t.pensize(4)
radius = 85
diamond_size = 100
diamonds_in_layer = 10
layers_in_graphics = 2
def diamond(x, color):
    t.fillcolor(color)
    t.begin_fill()
    for i in range(2):
        t.forward(x)
        t.left(60)
        t.forward(x)
        t.left(120)
    t.end_fill()    
t.penup()  
for color in ["green","light green"]:
    for i in range (diamonds_in_layer):
        t.forward(radius)
        t.right(30)
        t.pendown()
        diamond(diamond_size,color)
        t.penup()
        t.home()
        t.left((1 + i) * 360 / diamonds_in_layer)
    diamond_size = 0.7 * diamond_size
    radius = 0.55 * radius
t.hideturtle()
screen.exitonclick()

        `,
        images: ["assets/project/python.10.1.png","assets/project/python.10.2.png"]
    },
    {
        id: 11,
        name: "Creative Design-7",
        description: "An automation script using Python's os and shutil modules to organize files. This project automates repetitive file management tasks, improving productivity.",
        codeSnippet: `

from turtle import*
import colorsys
bgcolor('black')
width(3)
speed(0)
goto(-100,100)
n = 5
h = 1 
for i in range (100):
    c = colorsys.hsv_to_rgb(h,1,0.9)
    h += 1/n
    color(c)
    left(150)
    for i in range (5):
        fd(100)
        left(55)
done()

        `,
        images: ["assets/project/python.11.png"]
    },
    {
        id: 12,
        name: "Creative Design-8",
        description: "An automation script using Python's os and shutil modules to organize files. This project automates repetitive file management tasks, improving productivity.",
        codeSnippet: `

import turtle
t = turtle.Turtle()
turtle.bgcolor('black')
screen = turtle.Screen()
t.pensize(4)
t.pencolor('white')
graphic_size = 55
number_of_pattern = 10
t.penup()
t.forward(graphic_size)
t.left( 360 / number_of_pattern)
t.pendown()
for i in range (number_of_pattern):
    t.forward(graphic_size)
    t.left(45 - (360 / (2 * number_of_pattern)))
    t.forward(graphic_size)
    t.right(90)
    t.forward(graphic_size)
    t.pencolor('red')
    t.circle(graphic_size,90)
    t.left(90)
    t.circle(graphic_size,90)
    t.pencolor('white')
    t.forward(graphic_size)
    t.right(90)
    t.forward(graphic_size)
    t.left(45 - (360 / (2 * number_of_pattern)))
    t.forward(graphic_size)
    t.right(180 - (720 / number_of_pattern))
t.hideturtle()
screen.exitonclick()

        `,
        images: ["assets/project/python.12.1.png","assets/project/python.12.2.png"]
    },
    {
        id: 13,
        name: "Creative Design-9",
        description: "An automation script using Python's os and shutil modules to organize files. This project automates repetitive file management tasks, improving productivity.",
        codeSnippet: `

import turtle

def draw_flower():
    screen = turtle.Screen()
    screen.bgcolor("black")
    t = turtle.Turtle()
    t.speed(0)
    colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"]

    for i in range(360):
        t.pencolor(colors[i % len(colors)])
        t.width(i // 100 + 1)
        t.forward(i)
        t.left(59)

    t.hideturtle()
    screen.mainloop()

if __name__ == "__main__":
    draw_flower()

        `,
        images: ["assets/project/python.13.png"]
    },
    {
        id: 14,
        name: "Ram Circle Design",
        description: "An automation script using Python's os and shutil modules to organize files. This project automates repetitive file management tasks, improving productivity.",
        codeSnippet: `

from turtle import *

title('Jai Shri Ram')

pensize(5)
pencolor("orange")
bgcolor("black")

Sandeep      = ["जय श्री राम", "जय श्री राम", "जय श्री राम",
                "जय श्री राम", "जय श्री राम", "जय श्री राम", "जय श्री राम",
                "जय श्री राम", "जय श्री राम", "जय श्री राम", "जय श्री राम",
                "जय श्री राम", "जय श्री राम", "जय श्री राम", "जय श्री राम",
                "जय श्री राम", "जय श्री राम", "जय श्री राम", "जय श्री राम",
                "जय श्री राम", "जय श्री राम", "जय श्री राम", "जय श्री राम",
                "जय श्री राम", "जय श्री राम", "जय श्री राम", "जय श्री राम",
                "जय श्री राम", "जय श्री राम", "जय श्री राम", "जय श्री राम",
                "जय श्री राम", "जय श्री राम", "जय श्री राम", "जय श्री राम",
                "जय श्री राम", "जय श्री राम", "जय श्री राम", "जय श्री राम",
                "जय श्री राम", "जय श्री राम", "जय श्री राम", "जय श्री राम",
                "जय श्री राम", "जय श्री राम", "जय श्री राम", "जय श्री राम",
                "जय श्री राम", "जय श्री राम", "जय श्री राम", "जय श्री राम",
                "जय श्री राम", "जय श्री राम", "जय श्री राम", "जय श्री राम",
                "जय श्री राम", "जय श्री राम", "जय श्री राम", "जय श्री राम",
                "जय श्री राम", "जय श्री राम",]

angle = 360/49

penup()
sety(-1)
for i in range(50):
    right(angle)
    forward(260)
    write(Sandeep[i], align="right",
          font=('Arial', 12, "bold"))
    backward(260)
penup()
goto(-40, -20)
pendown()
write(" || राम ||", 
      font=("Arial", 60, "normal"),
      align="center")
hideturtle()
done()

        `,
        images: ["assets/project/python.14.png"]
    },
];

// Function to create project elements
function createPythonProjects() {
    const projectsContainer = document.getElementById('python-projects-container');

    pythonProjects.forEach(project => {
        const projectDiv = document.createElement('div');
        projectDiv.className = 'python-project-item padd-15';

        const imagesHtml = project.images.map(img => `<img src="${img}" alt="${project.name}" class="project-img">`).join('');

        projectDiv.innerHTML = `
            <div class="project-item-inner shadow-dark">
            <h4>Project Images:</h4>
            <div class="project-gallery">
                ${imagesHtml}
            </div>
            <h3 class="project-title">${project.name}</h3>
            <p class="project-description">${project.description}</p>
            <h4>Project Code:</h4>
            <div class="code-container">
                <pre><code>${project.codeSnippet.trim()}</code></pre>
            <button class="copy-btn" onclick="copyCode(this)" title="Copy code">
                <i class="fas fa-copy"></i> Copy
            </button>
            </div>
            </div>
            `;

        projectsContainer.appendChild(projectDiv);
    });
}

// Initialize projects on page load
document.addEventListener('DOMContentLoaded', createPythonProjects);

// Copy code to clipboard function
function copyCode(button) {
    const codeBlock = button.previousElementSibling.querySelector('code');
    const text = codeBlock.textContent;

    // Copy to clipboard
    navigator.clipboard.writeText(text).then(() => {
        // Change button text temporarily
        const originalText = button.innerHTML;
        button.innerHTML = '<i class="fas fa-check"></i> Copied!';
        button.style.background = '#10b981';

        // Reset after 2 seconds
        setTimeout(() => {
            button.innerHTML = originalText;
            button.style.background = '';
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy:', err);
        alert('Failed to copy code');
    });
}