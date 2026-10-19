import React, { useState } from 'react';
import { 
  Calendar, 
  Clock, 
  Plus, 
  Check, 
  ChevronLeft, 
  ChevronRight, 
  Sparkles, 
  Heart, 
  Apple, 
  Info, 
  ShieldCheck, 
  Utensils,
  X 
} from 'lucide-react';

export default function MealPlannerPage() {
  const [selectedDay, setSelectedDay] = useState('Wed');
  const [completedMeals, setCompletedMeals] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Form state for adding a custom meal/snack
  const [newMeal, setNewMeal] = useState({
    title: '',
    time: '3:30 PM',
    type: 'Snack',
    ingredients: '',
    nutrients: 'Protein, Fibre'
  });

  const days = [
    { day: 'Mon', date: '12' },
    { day: 'Tue', date: '13' },
    { day: 'Wed', date: '14', active: true },
    { day: 'Thu', date: '15' },
    { day: 'Fri', date: '16' },
    { day: 'Sat', date: '17' },
    { day: 'Sun', date: '18' },
  ];

  const [mealData, setMealData] = useState([
    {
      id: 1,
      time: '7:30 AM',
      mealType: 'Breakfast',
      title: 'Greek Yogurt Bowl',
      ingredients: [
        'Greek yogurt with berries & granola', 
        'Walnuts + chia seeds', 
        'Orange slices for Vitamin C'
      ],
      tags: ['Protein', 'Calcium', 'Fibre'],
      cardBg: 'var(--pink-light)',
      badgeBg: 'var(--pink-label)'
    },
    {
      id: 2,
      time: '12:30 PM',
      mealType: 'Lunch',
      title: 'Grilled Salmon Salad',
      ingredients: [
        'Leafy greens, avocado, quinoa', 
        'Roasted chickpeas', 
        'Lemon-olive oil dressing'
      ],
      tags: ['Protein', 'Healthy Fats', 'Iron'],
      cardBg: 'var(--green-light)',
      badgeBg: 'var(--green-label)'
    },
    {
      id: 3,
      time: '6:30 PM',
      mealType: 'Dinner',
      title: 'Lentil & Veggie Stir-Fry',
      ingredients: [
        'Lentil with spinach & bell peppers', 
        'Brown rice', 
        'Sesame seeds for calcium'
      ],
      tags: ['Fibre', 'Calcium', 'Iron'],
      cardBg: 'var(--green-light)',
      badgeBg: 'var(--green-label)'
    }
  ]);

  const toggleMealComplete = (id) => {
    setCompletedMeals(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleAddMeal = (e) => {
    e.preventDefault();
    if (!newMeal.title.trim()) return;

    const addedItem = {
      id: Date.now(),
      time: newMeal.time,
      mealType: newMeal.type,
      title: newMeal.title,
      ingredients: newMeal.ingredients ? newMeal.ingredients.split(',').map(i => i.trim()) : ['Balanced ingredients'],
      tags: newMeal.nutrients ? newMeal.nutrients.split(',').map(t => t.trim()) : ['Nutritious'],
      cardBg: 'var(--green-light)',
      badgeBg: 'var(--green-label)'
    };

    setMealData(prev => [...prev, addedItem]);
    setIsModalOpen(false);
    setNewMeal({ title: '', time: '3:30 PM', type: 'Snack', ingredients: '', nutrients: 'Protein, Fibre' });
  };

  return (
    <div className="nutrimama-container">
      {/* Embedded CSS Styling */}
      <style>{`
        :root {
          --rose: #FF6B8A;
          --rose-dark: #E85D7A;
          --pink-light: #FFF0F3;
          --pink-label: #FFD9DF;
          --sage: #2E7D5B;
          --green-light: #EAF7ED;
          --green-label: #D8E9DC;
          --green-btn: #8CB88E;
          --cream: #FFFBF5;
          --text-dark: #2B1F20;
          --text-muted: #7A6A6B;
          --white: #FFFFFF;
          --warning-beige: #FFF3CD;
        }

        .nutrimama-container {
          min-height: 100vh;
          background-color: var(--cream);
          color: var(--text-dark);
          font-family: system-ui, -apple-system, sans-serif;
          padding-bottom: 3rem;
        }

        .planner-header {
          background-color: var(--white);
          border-bottom: 1px solid var(--green-label);
          padding: 1rem 1.5rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .calendar-strip {
          background-color: var(--white);
          border: 1px solid var(--green-label);
          border-radius: 1rem;
          padding: 1rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          box-shadow: 0 1px 3px rgba(0,0,0,0.02);
        }

        .day-btn {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 0.5rem 0.85rem;
          border-radius: 0.75rem;
          border: none;
          cursor: pointer;
          transition: all 0.2s ease;
          background: transparent;
          color: var(--text-muted);
        }

        .day-btn.active {
          background-color: var(--sage);
          color: var(--white);
          box-shadow: 0 2px 6px rgba(46, 125, 91, 0.25);
        }

        .meal-card-box {
          border-radius: 1rem;
          padding: 1.25rem;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          box-shadow: 0 1px 3px rgba(0,0,0,0.03);
          border: 1px solid rgba(0,0,0,0.03);
        }

        .meal-card-box:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0,0,0,0.06);
        }

        .check-circle {
          width: 2.25rem;
          height: 2.25rem;
          border-radius: 50%;
          border: 2px solid var(--sage);
          background-color: var(--white);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .check-circle.completed {
          background-color: var(--sage);
        }

        .btn-add-snack {
          background-color: var(--green-btn);
          color: var(--white);
          font-weight: 600;
          padding: 0.75rem 1.5rem;
          border-radius: 1rem;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          transition: background-color 0.2s ease;
          box-shadow: 0 2px 4px rgba(140, 184, 142, 0.3);
        }

        .btn-add-snack:hover {
          background-color: var(--sage);
        }

        .modal-overlay {
          position: fixed;
          inset: 0;
          background-color: rgba(0, 0, 0, 0.4);
          backdrop-filter: blur(4px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1rem;
          z-index: 50;
        }

        .modal-card {
          background-color: var(--white);
          border-radius: 1.25rem;
          padding: 1.5rem;
          width: 100%;
          max-width: 28rem;
          box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1);
        }

        .form-input {
          width: 100%;
          padding: 0.75rem 1rem;
          border-radius: 0.75rem;
          border: 1px solid #E5E7EB;
          outline: none;
          font-size: 0.95rem;
          background-color: var(--cream);
          color: var(--text-dark);
        }

        .form-input:focus {
          border-color: var(--rose);
        }

        .submit-btn {
          background-color: var(--rose);
          color: var(--white);
          font-weight: 600;
          width: 100%;
          padding: 0.75rem;
          border-radius: 0.75rem;
          border: none;
          cursor: pointer;
          transition: background-color 0.2s ease;
        }

        .submit-btn:hover {
          background-color: var(--rose-dark);
        }
      `}</style>

      {/* Top Navbar */}
      <header className="planner-header">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--sage)' }}>
            <Apple className="w-5 h-5 text-white" />
          </div>
          <span className="font-bold text-lg" style={{ color: 'var(--text-dark)' }}>MamaNutri Guide</span>
        </div>
        <div className="flex items-center gap-4 text-sm font-medium" style={{ color: 'var(--text-muted)' }}>
          <span className="cursor-pointer hover:text-black">Home</span>
          <span className="cursor-pointer hover:text-black">Nutrition Guide</span>
          <span className="font-bold underline" style={{ color: 'var(--rose)' }}>Meal Planner</span>
        </div>
      </header>

      {/* Main Content Layout */}
      <main className="max-w-2xl mx-auto px-4 mt-6 space-y-6">
        
        {/* Calendar Strip */}
        <div className="calendar-strip">
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5" style={{ color: 'var(--sage)' }} />
            <div>
              <p className="text-xs text-gray-500 font-medium">Active Date</p>
              <p className="font-bold text-sm" style={{ color: 'var(--text-dark)' }}>Oct 14, 2024</p>
            </div>
          </div>
          <div className="flex gap-1 overflow-x-auto">
            {days.map((item) => (
              <button
                key={item.day}
                onClick={() => setSelectedDay(item.day)}
                className={`day-btn ${selectedDay === item.day ? 'active' : ''}`}
              >
                <span className="text-xs font-medium">{item.day}</span>
                <span className="font-bold text-sm">{item.date}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Trimester Banner */}
        <div className="flex items-center justify-between bg-white px-5 py-3.5 rounded-2xl border" style={{ borderColor: 'var(--green-label)' }}>
          <div>
            <span className="text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded-full" style={{ backgroundColor: 'var(--green-label)', color: 'var(--sage)' }}>
              Current Stage
            </span>
            <h2 className="font-bold text-base mt-1" style={{ color: 'var(--text-dark)' }}>2nd Trimester Meal Plan</h2>
          </div>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="btn-add-snack"
          >
            <Plus className="w-4 h-4" /> Add Snack
          </button>
        </div>

        {/* Meal Cards List */}
        <div className="space-y-4">
          {mealData.map((meal) => {
            const isDone = completedMeals[meal.id];
            return (
              <div 
                key={meal.id} 
                className="meal-card-box"
                style={{ backgroundColor: meal.cardBg }}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <span 
                      className="text-xs font-semibold px-2.5 py-1 rounded-full uppercase tracking-wider" 
                      style={{ backgroundColor: meal.badgeBg, color: 'var(--text-dark)' }}
                    >
                      {meal.mealType} • {meal.time}
                    </span>
                    <h3 className={`text-xl font-bold mt-2 ${isDone ? 'line-through opacity-50' : ''}`} style={{ color: 'var(--text-dark)' }}>
                      {meal.title}
                    </h3>
                  </div>
                  <button 
                    onClick={() => toggleMealComplete(meal.id)}
                    className={`check-circle ${isDone ? 'completed' : ''}`}
                    title={isDone ? "Mark incomplete" : "Mark as eaten"}
                  >
                    <Check className={`w-5 h-5 ${isDone ? 'text-white' : 'text-transparent'}`} />
                  </button>
                </div>

                {/* Ingredients Bullet List */}
                <ul className="mt-3 space-y-1 text-sm" style={{ color: 'var(--text-muted)' }}>
                  {meal.ingredients.map((ing, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: 'var(--sage)' }}></span>
                      {ing}
                    </li>
                  ))}
                </ul>

                {/* Nutrient Tags */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {meal.tags.map((tag, idx) => (
                    <span 
                      key={idx} 
                      className="text-xs font-semibold px-3 py-1 rounded-full bg-white/90 border shadow-2xs"
                      style={{ color: 'var(--text-dark)', borderColor: 'rgba(0,0,0,0.06)' }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </main>

      {/* Add Snack Modal Popup */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-card">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold" style={{ color: 'var(--text-dark)' }}>Add Extra Meal or Snack</h2>
              <button onClick={() => setIsModalOpen(false)} className="p-1 rounded-full hover:bg-gray-100">
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            <form onSubmit={handleAddMeal} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold uppercase mb-1" style={{ color: 'var(--text-muted)' }}>Meal Title</label>
                <input 
                  type="text" 
                  placeholder="e.g., Almonds & Greek Yogurt" 
                  value={newMeal.title}
                  onChange={(e) => setNewMeal({ ...newMeal, title: e.target.value })}
                  className="form-input"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold uppercase mb-1" style={{ color: 'var(--text-muted)' }}>Type</label>
                  <select 
                    value={newMeal.type}
                    onChange={(e) => setNewMeal({ ...newMeal, type: e.target.value })}
                    className="form-input"
                  >
                    <option value="Snack">Snack</option>
                    <option value="Breakfast">Breakfast</option>
                    <option value="Lunch">Lunch</option>
                    <option value="Dinner">Dinner</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase mb-1" style={{ color: 'var(--text-muted)' }}>Time</label>
                  <input 
                    type="text" 
                    value={newMeal.time}
                    onChange={(e) => setNewMeal({ ...newMeal, time: e.target.value })}
                    className="form-input"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase mb-1" style={{ color: 'var(--text-muted)' }}>Ingredients (comma separated)</label>
                <input 
                  type="text" 
                  placeholder="Handful of almonds, Apple slices" 
                  value={newMeal.ingredients}
                  onChange={(e) => setNewMeal({ ...newMeal, ingredients: e.target.value })}
                  className="form-input"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase mb-1" style={{ color: 'var(--text-muted)' }}>Nutrient Tags (comma separated)</label>
                <input 
                  type="text" 
                  placeholder="Protein, Vitamin E, Fibre" 
                  value={newMeal.nutrients}
                  onChange={(e) => setNewMeal({ ...newMeal, nutrients: e.target.value })}
                  className="form-input"
                />
              </div>

              <button type="submit" className="submit-btn mt-2">
                Save to Planner
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}