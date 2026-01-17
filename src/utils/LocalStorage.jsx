
const uid = () => Date.now() + Math.floor(Math.random() * 10000);

const employees = [
  {
    id: 1,
    firstname: "Rahul",
    email: "e1@e.com",
    pass: "123",
    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        id : uid(),
        title: "Fix login bug",
        description: "Resolve login validation issue",
        date: "2026-01-05",
        category: "Development",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        id : uid(),
        title: "Update UI",
        description: "Improve dashboard UI",
        date: "2026-01-06",
        category: "UI",
        active: false,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        id : uid(),
        title: "Write docs",
        description: "Add API documentation",
        date: "2026-01-03",
        category: "Documentation",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      }
    ]
  },

  {
    id: 2,
    firstname: "Aman",
    email: "e2@e.com",
    pass: "123",
    taskNumbers: {
      active: 1,
      newTask: 0,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        id : uid(),
        title: "Database backup",
        description: "Take full DB backup",
        date: "2026-01-04",
        category: "Database",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        id : uid(),
        title: "Optimize queries",
        description: "Reduce query response time",
        date: "2026-01-02",
        category: "Database",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        id : uid(),
        title: "Team meeting",
        description: "Weekly sync-up",
        date: "2026-01-01",
        category: "Meeting",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      }
    ]
  },

  {
    id: 3,
    firstname: "Neha",
    email: "e3@e.com",
    pass: "123",
    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        id :uid(),
        title: "Create API",
        description: "Build task API",
        date: "2026-01-07",
        category: "Backend",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        id : uid(),
        title: "Bug testing",
        description: "Test reported bugs",
        date: "2026-01-03",
        category: "Testing",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        id : uid(),
        title: "Refactor code",
        description: "Clean old code",
        date: "2026-01-02",
        category: "Development",
        active: false,
        newTask: true,
        completed: false,
        failed: false
      }
    ]
  },

  {
    id: 4,
    firstname: "Pooja",
    email: "e4@e.com",
    pass: "123",
    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        id : uid(),
        title: "Design banner",
        description: "Create marketing banner",
        date: "2026-01-06",
        category: "Design",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        id : uid(),
        title: "Client feedback",
        description: "Collect client feedback",
        date: "2026-01-04",
        category: "Communication",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        id : uid(),
        title: "Logo update",
        description: "Revise company logo",
        date: "2026-01-02",
        category: "Design",
        active: false,
        newTask: false,
        completed: false,
        failed: false
      }
    ]
  },

  {
    id: 5,
    firstname: "Arjun",
    email: "e5@e.com",
    pass: "123",
    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        id : uid(),
        title: "Deploy app",
        description: "Deploy on server",
        date: "2026-01-07",
        category: "Deployment",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        id : uid(),
        title: "Server check",
        description: "Check server health",
        date: "2026-01-05",
        category: "DevOps",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        id : uid(),
        title: "Fix crash",
        description: "Resolve production crash",
        date: "2026-01-03",
        category: "Bug Fix",
        active: false,
        newTask: false,
        completed: false,
        failed: false
      }
    ]
  }
]


 const admin = [
 {
   "id": 100,
   "email": "admin@company.com",
   "pass": "123"
 }
];
  

export const setData = () =>{
    localStorage.setItem('employees', JSON.stringify(employees))
    localStorage.setItem('admin', JSON.stringify(admin))
}
export const getData = () =>{
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))

    if(!employees || !admin){
      return null;
    }
    return {employees, admin}

}
