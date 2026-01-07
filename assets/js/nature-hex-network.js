/**
 * Nature-Inspired Hexagonal Network
 * Creates a hexagonal pattern with animated glowing connections
 * Green/nature theme with flowing energy animations
 */

class NatureHexNetwork {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        if (!this.canvas) return;
        
        this.ctx = this.canvas.getContext('2d');
        this.nodes = [];
        this.connections = [];
        this.animationId = null;
        
        this.setupCanvas();
        this.createHexagonalNetwork();
        this.animate();
        
        // Handle window resize
        window.addEventListener('resize', () => {
            this.setupCanvas();
            this.createHexagonalNetwork();
        });
    }
    
    setupCanvas() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.centerX = this.canvas.width / 2;
        this.centerY = this.canvas.height / 2;
    }
    
    createHexagonalNetwork() {
        this.nodes = [];
        this.connections = [];
        
        // Create hexagonal pattern
        const layers = 3;
        const baseRadius = Math.min(this.canvas.width, this.canvas.height) * 0.12;
        const hexSpacing = baseRadius * 1.8;
        
        // Central node
        this.nodes.push({
            x: this.centerX,
            y: this.centerY,
            radius: 8,
            glow: 1,
            connections: [],
            layer: 0,
            index: 0
        });
        
        // Create hexagonal layers
        for (let layer = 1; layer <= layers; layer++) {
            const radius = hexSpacing * layer;
            const nodesInLayer = 6 * layer;
            
            for (let i = 0; i < nodesInLayer; i++) {
                const angle = (Math.PI * 2 * i) / nodesInLayer - Math.PI / 2;
                const x = this.centerX + radius * Math.cos(angle);
                const y = this.centerY + radius * Math.sin(angle);
                
                this.nodes.push({
                    x: x,
                    y: y,
                    radius: 6,
                    glow: 0.7,
                    connections: [],
                    layer: layer,
                    index: this.nodes.length
                });
            }
        }
        
        // Create connections - each node connects to 5 nearest nodes
        this.nodes.forEach((node, index) => {
            const distances = this.nodes.map((other, otherIndex) => ({
                node: other,
                index: otherIndex,
                distance: Math.sqrt(
                    Math.pow(node.x - other.x, 2) + 
                    Math.pow(node.y - other.y, 2)
                )
            }));
            
            distances.sort((a, b) => a.distance - b.distance);
            const connections = distances.slice(1, 6);
            
            connections.forEach(conn => {
                const exists = this.connections.some(c => 
                    (c.from === index && c.to === conn.index) ||
                    (c.from === conn.index && c.to === index)
                );
                
                if (!exists) {
                    this.connections.push({
                        from: index,
                        to: conn.index,
                        progress: Math.random(),
                        speed: 0.008 + Math.random() * 0.015,
                        glow: 0.4 + Math.random() * 0.5
                    });
                    
                    node.connections.push(conn.index);
                }
            });
        });
    }
    
    drawNatureBackground() {
        // Draw nature-inspired pattern
        const ctx = this.ctx;
        ctx.save();
        ctx.globalAlpha = 0.08;
        
        // Draw circles (nature-inspired pattern)
        const circles = [
            { x: this.centerX, y: this.centerY, radius: 40 },
            ...Array.from({ length: 6 }, (_, i) => {
                const angle = (Math.PI * 2 * i) / 6 - Math.PI / 2;
                return {
                    x: this.centerX + 80 * Math.cos(angle),
                    y: this.centerY + 80 * Math.sin(angle),
                    radius: 30
                };
            }),
            ...Array.from({ length: 6 }, (_, i) => {
                const angle = (Math.PI * 2 * i) / 6 - Math.PI / 2;
                return {
                    x: this.centerX + 140 * Math.cos(angle),
                    y: this.centerY + 140 * Math.sin(angle),
                    radius: 25
                };
            })
        ];
        
        circles.forEach(circle => {
            ctx.beginPath();
            ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2);
            ctx.strokeStyle = '#4CAF50';
            ctx.lineWidth = 1;
            ctx.stroke();
            
            ctx.shadowBlur = 20;
            ctx.shadowColor = '#4CAF50';
            ctx.stroke();
            ctx.shadowBlur = 0;
        });
        
        // Draw connecting lines
        ctx.strokeStyle = '#4CAF50';
        ctx.lineWidth = 0.5;
        circles.forEach((circle, i) => {
            circles.slice(i + 1).forEach(otherCircle => {
                ctx.beginPath();
                ctx.moveTo(circle.x, circle.y);
                ctx.lineTo(otherCircle.x, otherCircle.y);
                ctx.stroke();
            });
        });
        
        ctx.restore();
    }
    
    drawConnection(conn) {
        const fromNode = this.nodes[conn.from];
        const toNode = this.nodes[conn.to];
        
        if (!fromNode || !toNode) return;
        
        const ctx = this.ctx;
        const dx = toNode.x - fromNode.x;
        const dy = toNode.y - fromNode.y;
        const length = Math.sqrt(dx * dx + dy * dy);
        
        const progress = conn.progress;
        const x = fromNode.x + dx * progress;
        const y = fromNode.y + dy * progress;
        
        // Draw flowing glow effect - green theme
        const gradient = ctx.createLinearGradient(
            fromNode.x, fromNode.y,
            toNode.x, toNode.y
        );
        
        gradient.addColorStop(0, `rgba(76, 175, 80, 0)`);
        gradient.addColorStop(Math.max(0, progress - 0.2), `rgba(76, 175, 80, 0)`);
        gradient.addColorStop(progress, `rgba(76, 175, 80, ${conn.glow})`);
        gradient.addColorStop(Math.min(1, progress + 0.2), `rgba(139, 195, 74, ${conn.glow * 0.8})`);
        gradient.addColorStop(1, `rgba(139, 195, 74, 0)`);
        
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 2;
        ctx.shadowBlur = 15;
        ctx.shadowColor = '#4CAF50';
        
        ctx.beginPath();
        ctx.moveTo(fromNode.x, fromNode.y);
        ctx.lineTo(toNode.x, toNode.y);
        ctx.stroke();
        
        // Draw flowing particle
        ctx.fillStyle = `rgba(76, 175, 80, ${conn.glow})`;
        ctx.shadowBlur = 20;
        ctx.shadowColor = '#4CAF50';
        ctx.beginPath();
        ctx.arc(x, y, 3, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.shadowBlur = 0;
        
        // Update progress
        conn.progress += conn.speed;
        if (conn.progress > 1) {
            conn.progress = 0;
        }
    }
    
    drawNode(node, index) {
        const ctx = this.ctx;
        
        // Outer glow - green theme
        const gradient = ctx.createRadialGradient(
            node.x, node.y, 0,
            node.x, node.y, node.radius * 3
        );
        gradient.addColorStop(0, `rgba(76, 175, 80, ${node.glow * 0.6})`);
        gradient.addColorStop(0.5, `rgba(139, 195, 74, ${node.glow * 0.3})`);
        gradient.addColorStop(1, 'rgba(76, 175, 80, 0)');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius * 3, 0, Math.PI * 2);
        ctx.fill();
        
        // Node circle
        ctx.fillStyle = `rgba(76, 175, 80, ${node.glow})`;
        ctx.shadowBlur = 15;
        ctx.shadowColor = '#4CAF50';
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fill();
        
        // Pulsing effect
        node.glow = 0.6 + Math.sin(Date.now() * 0.003 + index) * 0.4;
        
        ctx.shadowBlur = 0;
    }
    
    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        // Draw nature background
        this.drawNatureBackground();
        
        // Draw connections
        this.connections.forEach(conn => {
            this.drawConnection(conn);
        });
        
        // Draw nodes
        this.nodes.forEach((node, index) => {
            this.drawNode(node, index);
        });
        
        this.animationId = requestAnimationFrame(() => this.animate());
    }
    
    destroy() {
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
        }
    }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        window.natureHexNetwork = new NatureHexNetwork('nature-hex-canvas');
    });
} else {
    window.natureHexNetwork = new NatureHexNetwork('nature-hex-canvas');
}

