import { Heart, Gift, Calendar, Building, CreditCard, Landmark } from 'lucide-react'

const donationLevels = [
  {
    amount: 50,
    name: 'Friend',
    description: 'Support a student with learning materials',
    benefits: ['Newsletter subscription', 'Event invitations'],
  },
  {
    amount: 250,
    name: 'Supporter',
    description: 'Fund a month of language classes',
    benefits: ['All Friend benefits', 'Recognition in annual report', 'Exclusive webinars'],
  },
  {
    amount: 1000,
    name: 'Patron',
    description: 'Sponsor a scholarship recipient',
    benefits: ['All Supporter benefits', 'VIP event access', 'Personal impact report'],
  },
  {
    amount: 5000,
    name: 'Benefactor',
    description: 'Enable a major cultural initiative',
    benefits: ['All Patron benefits', 'Board meeting attendance', 'Named program recognition'],
  },
]

const impactAreas = [
  {
    icon: Gift,
    title: 'Scholarships',
    description: 'Help Persian students achieve their educational dreams.',
  },
  {
    icon: Building,
    title: 'Cultural Centers',
    description: 'Support community spaces for Persian gatherings and learning.',
  },
  {
    icon: Calendar,
    title: 'Events & Programs',
    description: 'Enable cultural celebrations and educational workshops.',
  },
  {
    icon: Heart,
    title: 'Emergency Relief',
    description: 'Provide rapid assistance to community members in crisis.',
  },
]

export function Donate() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">Support Our Mission</span>
            </h1>
            <p className="text-white/60 max-w-2xl mx-auto">
              Your generosity helps preserve Persian heritage and support our community.
              Every contribution makes a difference.
            </p>
          </div>

          {/* Donation Levels */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-center mb-8">Giving Levels</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {donationLevels.map((level) => (
                <div key={level.name} className="glass-card p-6 hover:border-parsis-gold/30 transition-colors">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold">{level.name}</h3>
                    <span className="text-2xl font-bold gradient-text">${level.amount}</span>
                  </div>
                  <p className="text-white/70 mb-4">{level.description}</p>
                  <ul className="space-y-2">
                    {level.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm text-white/60">
                        <div className="w-1.5 h-1.5 rounded-full bg-parsis-gold" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full mt-6 py-3 bg-gradient-to-r from-parsis-gold to-parsis-bronze text-parsis-deep font-semibold rounded-lg hover:opacity-90 transition-opacity">
                    Donate ${level.amount}
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Custom Amount */}
          <div className="glass-card p-8 mb-12">
            <h2 className="text-xl font-bold mb-6 text-center">Custom Donation</h2>
            <div className="max-w-md mx-auto">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-2xl text-parsis-gold">$</span>
                <input
                  type="number"
                  placeholder="Enter amount"
                  className="flex-1 bg-parsis-deep border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-parsis-gold text-xl"
                />
              </div>
              <button className="w-full py-4 bg-gradient-to-r from-parsis-gold to-parsis-bronze text-parsis-deep font-semibold rounded-lg hover:opacity-90 transition-opacity">
                Donate Now
              </button>
            </div>
          </div>

          {/* Impact Areas */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-center mb-8">Where Your Gift Goes</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {impactAreas.map((area) => (
                <div key={area.title} className="glass-card p-6">
                  <area.icon className="w-8 h-8 text-parsis-gold mb-3" />
                  <h3 className="text-lg font-semibold mb-2">{area.title}</h3>
                  <p className="text-white/60 text-sm">{area.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Other Ways to Give */}
          <div className="glass-card p-8 mb-12">
            <h2 className="text-xl font-bold mb-6 text-center">Other Ways to Give</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <Calendar className="w-10 h-10 text-parsis-gold mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Monthly Giving</h3>
                <p className="text-white/60 text-sm">
                  Become a sustaining member with recurring donations.
                </p>
              </div>
              <div className="text-center">
                <Landmark className="w-10 h-10 text-parsis-gold mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Planned Giving</h3>
                <p className="text-white/60 text-sm">
                  Include PARSIS Foundation in your estate plans.
                </p>
              </div>
              <div className="text-center">
                <CreditCard className="w-10 h-10 text-parsis-gold mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Corporate Matching</h3>
                <p className="text-white/60 text-sm">
                  Double your impact through employer matching programs.
                </p>
              </div>
            </div>
          </div>

          {/* Tax Info */}
          <div className="p-6 border border-parsis-gold/20 rounded-lg bg-parsis-gold/5 text-center">
            <p className="text-white/70">
              PARSIS Foundation is a registered 501(c)(3) nonprofit organization.
              Your donation is tax-deductible to the extent allowed by law.
            </p>
            <p className="text-white/50 text-sm mt-2">
              {/* TODO: Replace with actual EIN when 501(c)(3) registration is complete */}
              EIN: Pending Registration
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
